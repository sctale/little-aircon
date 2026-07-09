import { LitElement, html, nothing } from 'lit'
import { property } from 'lit/decorators.js'
import debounce from 'debounce-fn'
import { name as CARD_NAME } from '../package.json'

import isEqual from './isEqual'
import styles from './styles.css'

import formatNumber from './formatNumber'
import fireEvent from './fireEvent'
import renderHeader from './components/header'
import renderTemplated, { wrapSensors } from './components/templated'
import renderSensors from './components/sensors'
import renderModeType from './components/modeType'

import parseHeader, { HeaderData, MODE_ICONS } from './config/header'
import parseSetpoints from './config/setpoints'
import parseService, { Service } from './config/service'

import { CardConfig, ModeValue, ModeControlObject, MODES } from './config/card'

import {
  ControlMode,
  ControlModeOption,
  LooseObject,
  Sensor,
  PreparedSensor,
  HASS,
  HVAC_MODES,
} from './types'

const DEBOUNCE_TIMEOUT = 500
const STEP_SIZE = 0.5
const DECIMALS = 1

const MODE_TYPES: Array<string> = Object.values(MODES)
const DEFAULT_CONTROL = [MODES.HVAC, MODES.PRESET]

const ICONS = {
  UP: 'hass:chevron-up',
  DOWN: 'hass:chevron-down',
  PLUS: 'mdi:plus',
  MINUS: 'mdi:minus',
}

const TIMER_OPTIONS = [
  { value: 'timer_off', label: '关闭', minutes: 0, icon: 'mdi:timer-off' },
  { value: 'timer_30', label: '30分', minutes: 30, icon: 'mdi:timer-outline' },
  { value: 'timer_60', label: '1时', minutes: 60, icon: 'mdi:timer-outline' },
  { value: 'timer_90', label: '1.5时', minutes: 90, icon: 'mdi:timer-outline' },
  { value: 'timer_120', label: '2时', minutes: 120, icon: 'mdi:timer-outline' },
]

const DEFAULT_HIDE = {
  temperature: false,
  state: false,
}

function shouldShowModeControl(
  modeOption: string,
  config: Partial<ModeControlObject>
) {
  if (typeof config[modeOption] === 'object') {
    const obj = config[modeOption] as ModeValue
    return obj.include !== false
  }
  return config?.[modeOption] ?? true
}

const MODE_FALLBACK_ICONS: Record<string, string> = {
  hvac: 'mdi:hvac',
  preset: 'mdi:tune',
  fan: 'mdi:fan',
  swing: 'mdi:arrow-up-down',
  swing_horizontal: 'mdi:arrow-left-right',
}

function getModeIcon(type: string, modeOption: string): string {
  // fan 模式下的 auto 用风扇图标，而非 HVAC 的 hvac
  if (type === 'fan' && modeOption === 'auto') return 'mdi:fan-auto'
  return MODE_ICONS[modeOption] || MODE_FALLBACK_ICONS[type] || 'mdi:hvac'
}

function getModeList(
  type: string,
  attributes: LooseObject,
  specification: Partial<ModeControlObject> = {}
) {
  return attributes[`${type}_modes`]
    .filter((modeOption) => shouldShowModeControl(modeOption, specification))
    .map((modeOption) => {
      const values =
        typeof specification[modeOption] === 'object'
          ? specification[modeOption]
          : {}
      return {
        icon: getModeIcon(type, modeOption),
        value: modeOption,
        name: modeOption,
        ...values,
      }
    })
}

interface Values {
  [key: string]: number | string
}

interface HANode extends Element {
  hass: any
}

export default class SimpleThermostat extends LitElement {
  static styles = styles

  @property({ type: Object })
  config: CardConfig = {} as CardConfig

  @property({ type: Object })
  header: false | HeaderData = false

  @property({ type: Object })
  service: Service = {} as Service

  @property({ type: Array })
  modes: Array<ControlMode> = []

  _hass: HASS = {}

  @property({ type: Object })
  entity: LooseObject | undefined

  @property({ type: Array })
  sensors: Array<Sensor | PreparedSensor> = []

  @property({ type: Boolean })
  showSensors: boolean = true

  @property({ type: String })
  name: string | false = ''

  stepSize = STEP_SIZE

  @property({ type: Object })
  _values: Values = {}

  @property({ type: Boolean })
  _updatingValues: boolean = false

  @property({ type: Object })
  _hide = DEFAULT_HIDE

  // 定时器相关：从 HA timer 实体读取状态
  @property({ type: String })
  _timerValue: string = 'timer_off'

  @property({ type: Number })
  _timerRemaining: number = 0

  @property({ type: Number })
  _timerTotal: number = 0

  // 前端 UI 刷新定时器（仅刷新显示，不管理倒计时逻辑）
  _uiRefreshInterval: ReturnType<typeof setInterval> | null = null

  // HA 事件订阅取消函数
  _unsubTimerFinished: (() => void) | null = null

  _debouncedSetTemperature = debounce(
    (values: object) => {
      const { domain, service, data = {} } = this.service
      this._hass.callService(domain, service, {
        entity_id: this.config.entity,
        ...data,
        ...values,
      })
    },
    { wait: DEBOUNCE_TIMEOUT }
  )

  static getConfigElement() {
    return window.document.createElement(`${CARD_NAME}-editor`)
  }

  setConfig(config: CardConfig) {
    if (!config.entity || !config.entity.startsWith('climate.')) {
      throw new Error('需要指定 climate 域的实体')
    }
    this.config = {
      decimals: DECIMALS,
      ...config,
    }
  }

  updated() {
    const patchHass: Array<HANode> = Array.from(
      this.renderRoot.querySelectorAll('[with-hass]')
    )
    for (const child of Array.from(patchHass)) {
      Array.from(child.attributes).forEach((attr) => {
        if (attr.name.startsWith('fwd-')) {
          ;(child as any)[attr.name.replace('fwd-', '')] = attr.value
        }
      })
      ;(child as any).hass = this._hass
    }
  }

  set hass(hass: any) {
    this._hass = hass

    if (!this.config?.entity) return

    const entity = hass.states[this.config.entity]
    if (!entity) return
    if (this.entity !== entity) {
      this.entity = entity
    }

    this.header = parseHeader(this.config.header, entity, hass)
    this.service = parseService(this.config?.service ?? false)

    const attributes = entity.attributes
    let values = parseSetpoints(this.config?.setpoints ?? null, attributes)

    if (this._updatingValues && isEqual(values, this._values)) {
      this._updatingValues = false
    } else if (!this._updatingValues) {
      this._values = values
    }

    const supportedModeType = (type: string) =>
      MODE_TYPES.includes(type) && attributes[`${type}_modes`]

    const buildBasicModes = (items: any) => {
      return items.filter(supportedModeType).map((type: string) => ({
        type,
        hide_when_off: false,
        list: getModeList(type, attributes),
      }))
    }

    let controlModes: Array<Partial<ControlMode>> = []
    if (this.config.control === false) {
      controlModes = []
    } else if (Array.isArray(this.config.control)) {
      controlModes = buildBasicModes(this.config.control)
    } else if (typeof this.config.control === 'object') {
      const entries = Object.entries(this.config.control)
      if (entries.length > 0) {
        controlModes = entries
          .filter(([type]) => supportedModeType(type))
          .map(([type, definition]: [string, ModeControlObject]) => {
            const { _name, _hide_when_off, ...controlField } = definition
            return {
              type,
              hide_when_off: _hide_when_off,
              name: _name,
              list: getModeList(type, attributes, controlField),
            }
          })
      } else {
        controlModes = buildBasicModes(DEFAULT_CONTROL)
      }
    } else {
      controlModes = buildBasicModes(DEFAULT_CONTROL)
    }

    this.modes = controlModes.map((values) => {
      if (values.type === MODES.HVAC) {
        const sortedList: Array<Partial<ControlMode>> = []
        const hvacModeValues = Object.values(HVAC_MODES) as Array<string>
        values.list!.forEach((item: ControlModeOption) => {
          const index = hvacModeValues.indexOf(item.value)
          sortedList[index] = item
        })
        return {
          ...values,
          list: sortedList,
          mode: entity.state,
        } as ControlMode
      }
      const mode = attributes[`${values.type}_mode`]
      return { ...values, mode } as ControlMode
    })

    if (this.config.step_size) {
      this.stepSize = +this.config.step_size
    }

    if (this.config.hide) {
      this._hide = { ...this._hide, ...this.config.hide }
    }

    // 定时器开启但未配置 timer_entity 时，自动创建
    if (this.config?.timer && this.config.timer !== 'hide' && !this.config?.timer_entity) {
      this._autoCreateTimerEntity()
    }

    // 定时器隐藏时，删除 timer 实体并清理配置
    if ((!this.config?.timer || this.config.timer === 'hide') && this.config?.timer_entity) {
      this._deleteTimerEntity(this.config.timer_entity)
    }

    // 同步 HA timer 实体状态
    this._syncTimerEntity()

    // 空调被关闭时，取消正在运行的定时器
    if (entity.state === 'off' && this._timerValue !== 'timer_off') {
      const timerEntityId = this.config?.timer_entity
      if (timerEntityId && this._hass.states?.[timerEntityId]?.state === 'active') {
        this._hass.callService('timer', 'cancel', { entity_id: timerEntityId })
        this._unsubscribeTimerFinished()
      }
    }

    if (this.config.sensors === false) {
      this.showSensors = false
    } else if (this.config.version === 3 && Array.isArray(this.config.sensors)) {
      this.sensors = []
      const customSensors = this.config.sensors.map((sensor, index) => {
        const entityId = sensor?.entity ?? this.config.entity
        let context = this.entity
        if (sensor?.entity) {
          context = this._hass.states[sensor.entity]
        }
        return {
          id: sensor?.id ?? String(index),
          label: sensor?.label,
          template: sensor.template,
          show: sensor?.show !== false,
          entityId,
          context,
        } as PreparedSensor
      })
      const ids = customSensors.map((s) => s.id)
      const builtins = []
      if (!ids.includes('state')) {
        builtins.push({
          id: 'state',
          label: '当前状态',
          template: '{{state.text}}',
          entityId: this.config.entity,
          context: this.entity,
        })
      }
      if (!ids.includes('temperature')) {
        builtins.push({
          id: 'temperature',
          label: '当前温度',
          template: '{{current_temperature|formatNumber}}°',
          entityId: this.config.entity,
          context: this.entity,
        })
      }
      this.sensors = [...builtins, ...customSensors]
    } else if (this.config.sensors) {
      this.sensors = this.config.sensors.map(
        ({ name, entity, attribute, unit = '', ...rest }) => {
          let state
          const names = [name]
          if (entity) {
            state = hass.states[entity]
            names.push(state?.attributes?.friendly_name)
            if (attribute) {
              state = state.attributes[attribute]
            }
          } else if (attribute && attribute in this.entity.attributes) {
            state = this.entity.attributes[attribute]
            names.push(attribute)
          }
          names.push(entity)
          return {
            ...rest,
            name: names.find((n) => !!n),
            state,
            entity,
            unit,
          } as Sensor
        }
      )
    }
  }

  localize = (label: string, prefix = '') => {
    const lang = this._hass.selectedLanguage || this._hass.language
    const key = `${prefix}${label}`
    const translations = this._hass.resources[lang]
    return translations?.[key] ?? label
  }

  render() {
    const warnings = []
    if (this.stepSize < 1 && this.config.decimals === 0) {
      warnings.push(html`
        <hui-warning>
          小数位设为0但步进值小于1，点击减温可能失效，请调整设置。
        </hui-warning>
      `)
    }

    if (!this.entity || !this.entity.attributes) {
      return html`<hui-warning .hass=${this._hass}> 实体不可用: ${this.config.entity} </hui-warning>`
    }

    const {
      attributes: {
        min_temp: minTemp = null,
        max_temp: maxTemp = null,
        hvac_action: action,
      },
    } = this.entity

    const unit = this.getUnit()
    const stepLayout = this.config?.layout?.step ?? 'row'
    const row = stepLayout === 'row'
    const classes = [!this.header && 'no-header', action].filter((cx) => !!cx)

    let sensorsHtml
    if (this.config.version === 3) {
      sensorsHtml = this.sensors
        .filter((spec: PreparedSensor) => spec.show !== false)
        .map((spec: PreparedSensor) => {
          return renderTemplated({
            ...spec,
            variables: this.config.variables,
            hass: this._hass,
            config: this.config,
            localize: this.localize,
            openEntityPopover: this.openEntityPopover,
          })
        })
      sensorsHtml = wrapSensors(this.config, sensorsHtml)
    } else {
      sensorsHtml = this.showSensors
        ? renderSensors({
            _hide: this._hide,
            unit,
            hass: this._hass,
            entity: this.entity,
            sensors: this.sensors,
            config: this.config,
            localize: this.localize,
            openEntityPopover: this.openEntityPopover,
          })
        : ''
    }

    return html`
      <ha-card class="${classes.join(' ')}">
        ${warnings}
        ${renderHeader({
          header: this.header,
          toggleEntityChanged: this.toggleEntityChanged,
          entity: this.entity,
          openEntityPopover: this.openEntityPopover,
        })}
        <section class="body ${row ? 'row-layout' : ''}">
          ${sensorsHtml}
          ${Object.entries(this._values).map(([field, value]) => {
            const hasValue = ['string', 'number'].includes(typeof value)
            const showUnit = unit !== false && hasValue
            return html`
              <div class="current-wrapper ${stepLayout}">
                <ha-icon-button
                  label="降温"
                  ?disabled=${minTemp !== null && value <= minTemp}
                  class="thermostat-trigger"
                  @click=${() => this.setTemperature(-this.stepSize, field)}
                >
                  <ha-icon .icon=${row ? ICONS.MINUS : ICONS.UP}></ha-icon>
                </ha-icon-button>

                <h3
                  class="current--value ${this._updatingValues ? 'updating' : ''}"
                  @click=${() => this.openEntityPopover()}
                >
                  ${formatNumber(value, this.config)}
                  ${showUnit ? html`<span class="current--unit">${unit}</span>` : nothing}
                </h3>

                <ha-icon-button
                  label="升温"
                  ?disabled=${maxTemp !== null && value >= maxTemp}
                  class="thermostat-trigger"
                  @click=${() => this.setTemperature(this.stepSize, field)}
                >
                  <ha-icon .icon=${row ? ICONS.PLUS : ICONS.DOWN}></ha-icon>
                </ha-icon-button>
              </div>
            `
          })}
        </section>

        ${this.modes.map((mode) =>
          renderModeType({
            state: this.entity.state,
            mode,
            localize: this.localize,
            modeOptions: this.config?.layout?.mode ?? {},
            setMode: this.setMode,
          })
        )}

        ${this._renderTimer()}
      </ha-card>
    `
  }

  /** 渲染定时器 UI */
  private _renderTimer() {
    const timerConfig = this.config?.timer
    if (!timerConfig || timerConfig === 'hide') return nothing

    if (!this.config?.timer_entity) {
      return html`
        <div class="timer-hint">定时器实体将自动创建...</div>
      `
    }

    const headings = this.config?.layout?.mode?.headings ?? true
    const showNames = this.config?.layout?.mode?.names !== false
    const showIcons = this.config?.layout?.mode?.icons !== false

    const showProgress = this._timerRemaining > 0 && this._timerTotal > 0
    const progressPercent = showProgress
      ? Math.max(0, (this._timerRemaining / this._timerTotal) * 100)
      : 0

    return html`
      <div class="modes ${headings ? 'heading' : ''}">
        ${headings ? html`<div class="mode-title">定时关机</div>` : nothing}
        ${TIMER_OPTIONS.map((opt) => {
          const isActive = this._timerValue === opt.value
          return html`
            <div
              class="mode-item ${isActive ? 'active' : ''}"
              @click=${() => this._setTimer(opt.value)}
            >
              ${showIcons && opt.icon ? html`<ha-icon class="mode-icon" .icon=${opt.icon}></ha-icon>` : nothing}
              ${showNames ? html`${opt.label}` : nothing}
            </div>
          `
        })}
      </div>
      ${showProgress ? html`
        <div class="timer-progress-bar">
          <div class="timer-progress-fill" style="width: ${progressPercent}%">
            <span class="timer-progress-text">${this._formatRemaining(this._timerRemaining)} 后关机</span>
          </div>
        </div>
      ` : nothing}
    `
  }

  /** 从 HA timer 实体同步状态到卡片 */
  private _syncTimerEntity() {
    const timerEntityId = this.config?.timer_entity
    if (!timerEntityId) return
    const timerEntity = this._hass.states?.[timerEntityId]
    if (!timerEntity) return
    const timerState = timerEntity.state
    if (timerState === 'active') {
      const finishesAt = timerEntity.attributes?.finishes_at
      if (finishesAt) {
        const endTime = new Date(finishesAt).getTime()
        const now = Date.now()
        const remaining = Math.max(0, Math.floor((endTime - now) / 1000))
        this._timerRemaining = remaining
        const duration = timerEntity.attributes?.duration
        if (duration) {
          this._timerTotal = this._parseDuration(duration)
        } else if (this._timerTotal === 0) {
          this._timerTotal = remaining
        }
      }
      this._timerValue = this._matchTimerOption(this._timerRemaining)
      this._startUIRefresh()
      this._subscribeTimerFinished()
    } else if (timerState === 'paused') {
      const remaining = timerEntity.attributes?.remaining
      if (remaining) {
        this._timerRemaining = this._parseDuration(remaining)
      }
      this._timerValue = this._matchTimerOption(this._timerRemaining)
      this._stopUIRefresh()
    } else {
      this._timerRemaining = 0
      this._timerTotal = 0
      this._timerValue = 'timer_off'
      this._stopUIRefresh()
    }
  }

  /** 订阅 timer.finished 事件，倒计时结束时自动关空调 */
  private _subscribeTimerFinished() {
    if (this._unsubTimerFinished) return
    const timerEntityId = this.config?.timer_entity
    if (!timerEntityId) return
    const conn = (this._hass as any)?.connection
    if (!conn?.subscribeEvents) return
    this._unsubTimerFinished = conn.subscribeEvents(
      (ev: any) => {
        const eventData = ev.data
        if (eventData?.entity_id === timerEntityId) {
          this._hass.callService('climate', 'turn_off', {
            entity_id: this.config.entity,
          })
          this._unsubscribeTimerFinished()
        }
      },
      'timer.finished'
    )
  }

  /** 取消订阅 timer.finished 事件（定时器功能暂未启用） */
  private _unsubscribeTimerFinished() {
    if (this._unsubTimerFinished) {
      this._unsubTimerFinished()
      this._unsubTimerFinished = null
    }
  }

  /** 匹配当前剩余时间对应的定时选项（定时器功能暂未启用） */
  private _matchTimerOption(remainingSeconds: number): string {
    const minutes = Math.round(remainingSeconds / 60)
    const match = TIMER_OPTIONS.find((o) => o.minutes === minutes)
    return match ? match.value : 'timer_off'
  }

  /** 解析 HA duration 格式（HH:MM:SS 或秒数）为总秒数（定时器功能暂未启用） */
  private _parseDuration(duration: string | number): number {
    if (typeof duration === 'number') return duration
    const parts = String(duration).split(':').map(Number)
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]
    } else if (parts.length === 2) {
      return parts[0] * 60 + parts[1]
    }
    return parseInt(String(duration), 10) || 0
  }

  /** 启动 UI 刷新定时器（定时器功能暂未启用） */
  private _startUIRefresh() {
    if (this._uiRefreshInterval) return
    this._uiRefreshInterval = setInterval(() => {
      const timerEntityId = this.config?.timer_entity
      if (!timerEntityId) return
      const timerEntity = this._hass.states?.[timerEntityId]
      if (!timerEntity || timerEntity.state !== 'active') return
      const finishesAt = timerEntity.attributes?.finishes_at
      if (finishesAt) {
        const endTime = new Date(finishesAt).getTime()
        const now = Date.now()
        this._timerRemaining = Math.max(0, Math.floor((endTime - now) / 1000))
      }
      this.requestUpdate()
    }, 1000)
  }

  /** 停止 UI 刷新定时器（定时器功能暂未启用） */
  private _stopUIRefresh() {
    if (this._uiRefreshInterval) {
      clearInterval(this._uiRefreshInterval)
      this._uiRefreshInterval = null
    }
  }

  /** 设置定时器 */
  private _setTimer(value: string) {
    const timerEntityId = this.config?.timer_entity
    if (!timerEntityId) return
    if (value === 'timer_off') {
      this._hass.callService('timer', 'cancel', {
        entity_id: timerEntityId,
      })
      this._unsubscribeTimerFinished()
      return
    }
    const opt = TIMER_OPTIONS.find((o) => o.value === value)
    if (!opt) return
    const hours = Math.floor(opt.minutes / 60)
    const mins = opt.minutes % 60
    const durationStr = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:00`
    this._hass.callService('timer', 'start', {
      entity_id: timerEntityId,
      duration: durationStr,
    })
    this._timerValue = value
    this._timerTotal = opt.minutes * 60
    this._timerRemaining = this._timerTotal
    this.requestUpdate()
  }

  /** 格式化剩余时间 */
  private _formatRemaining(seconds: number): string {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  // 防止重复创建 timer
  _timerCreating: boolean = false

  /** 自动创建 timer（带防重复） */
  private async _autoCreateTimerEntity() {
    if (this._timerCreating) return
    this._timerCreating = true
    try {
      const entityId = await this._createTimerEntity()
      if (entityId) {
        this.config = { ...this.config, timer_entity: entityId }
        fireEvent(this, 'config-changed', { config: this.config })
      }
    } finally {
      this._timerCreating = false
    }
  }

  /** 删除 timer 实体并清理配置 */
  private async _deleteTimerEntity(entityId: string) {
    const timerEntity = this._hass.states?.[entityId]
    if (timerEntity?.state === 'active') {
      this._hass.callService('timer', 'cancel', { entity_id: entityId })
    }
    this._stopUIRefresh()
    this._unsubscribeTimerFinished()

    try {
      const conn = (this._hass as any)?.connection
      if (conn) {
        // 通过 entity registry 找到该 entity 对应的 config entry
        const entityReg = await conn.sendMessagePromise({
          type: 'config/entity_registry/get',
          entity_id: entityId,
        })
        const entryId = entityReg?.config_entry_id
        if (entryId) {
          await conn.sendMessagePromise({
            type: 'config_entries/remove',
            entry_id: entryId,
          })
        }
      }
    } catch (err) {
      console.warn('小空调：删除 timer 实体失败', err)
    }

    // 清理配置中的 timer_entity
    const newConfig = { ...this.config }
    delete (newConfig as any).timer_entity
    this.config = newConfig
    fireEvent(this, 'config-changed', { config: newConfig })

    // 重置 UI 状态
    this._timerValue = 'timer_off'
    this._timerRemaining = 0
    this._timerTotal = 0
  }

  /** 自动创建 HA timer helper 实体 */
  private async _createTimerEntity(): Promise<string | null> {
    const conn = (this._hass as any)?.connection
    if (!conn) return null

    try {
      const initResult = await conn.sendMessagePromise({
        type: 'config_entries/flow/initiate',
        handler: 'timer',
        show_advanced: false,
      })
      const flowId = initResult.flow_id

      const entityName = `小空调定时器_${this.config.entity?.split('.').pop() || 'unknown'}`
      const stepResult = await conn.sendMessagePromise({
        type: 'config_entries/flow/step',
        flow_id: flowId,
        user_input: {
          name: entityName,
          duration: '00:30:00',
          restore: true,
        },
      })

      if (stepResult.result?.entity_id) {
        return stepResult.result.entity_id
      }

      // 如果 result 不在 step 中，尝试从 hass.states 中查找
      const timerStates = Object.keys(this._hass.states).filter(
        (id) => id.startsWith('timer.') && id.includes('xiao_kong_tiao')
      )
      return timerStates.length > 0 ? timerStates[0] : null
    } catch (err) {
      console.error('小空调：创建 timer 失败', err)
      return null
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._stopUIRefresh()
    this._unsubscribeTimerFinished()
  }

  toggleEntityChanged = (ev: Event, entityId?: string) => {
    if (!this.header || !this?.header?.toggle) return
    const el = ev.target as HTMLInputElement
    // 支持多开关：优先使用传入的 entityId，否则回退到第一个开关（向后兼容）
    const targetEntityId = entityId || this.header?.toggle?.[0]?.entity?.entity_id
    if (!targetEntityId) return
    this._hass.callService(
      'homeassistant',
      el.checked ? 'turn_on' : 'turn_off',
      { entity_id: targetEntityId }
    )
  }

  setTemperature(change: number, field: string) {
    this._updatingValues = true
    const previousValue = this._values[field]
    const newValue = Number(previousValue) + change
    const { decimals } = this.config
    this._values = {
      ...this._values,
      [field]: +formatNumber(newValue, { decimals }),
    }
    this._debouncedSetTemperature(this._values)
  }

  setMode = (type: string, mode: string) => {
    if (type && mode) {
      this._hass.callService('climate', `set_${type}_mode`, {
        entity_id: this.config.entity,
        [`${type}_mode`]: mode,
      })
      fireEvent(this, 'haptic', 'light')
    } else {
      fireEvent(this, 'haptic', 'failure')
    }
  }

  openEntityPopover = (entityId: string | null = null) => {
    fireEvent(this, 'hass-more-info', {
      entityId: entityId || this.config.entity,
    })
  }

  getCardSize() {
    return 3
  }

  getUnit(): string | boolean {
    if (['boolean', 'string'].includes(typeof this.config.unit)) {
      return this.config?.unit
    }
    return this._hass.config?.unit_system?.temperature ?? false
  }
}
