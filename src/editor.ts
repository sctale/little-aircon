import { LitElement, html, nothing } from 'lit'
import { property } from 'lit/decorators.js'
import styles from './styles.css'
import fireEvent from './fireEvent'
import { name } from '../package.json'
import { CardConfig } from './config/card'
import { HASS } from './types'

function setValue(obj: any, path: string, value: any) {
  const pathFragments = path.split('.')
  let o = obj
  while (pathFragments.length - 1) {
    const fragment = pathFragments.shift()!
    if (!o.hasOwnProperty(fragment)) o[fragment] = {}
    o = o[fragment]
  }
  o[pathFragments[0]] = value
}

const OptionsDecimals = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
]
const OptionsStepSize = [
  { value: '0.5', label: '0.5' },
  { value: '1', label: '1' },
]
const OptionsStepLayout = [
  { value: 'column', label: 'column' },
  { value: 'row', label: 'row' },
]
const OPTIONS_SHOW_HIDE = [
  { value: 'show', label: '显示' },
  { value: 'hide', label: '隐藏' },
]
const includeDomains = ['climate']
const sensorIncludeDomains = ['sensor']
const timerIncludeDomains = ['timer']
const GithubReadMe = 'https://github.com/sctale/little-aircon/blob/master/README.md'

const stub: any = {
  header: {},
  layout: { mode: {} },
}

const cloneDeep = (obj: any) => JSON.parse(JSON.stringify(obj))

export default class SimpleThermostatEditor extends LitElement {
  @property({ type: Object }) config: CardConfig = {} as CardConfig
  @property({ type: Object }) hass!: HASS

  static styles = styles

  static getStubConfig() {
    return { ...stub }
  }

  setConfig(config: CardConfig) {
    this.config = config || { ...stub }
  }

  _openLink() {
    window.open(GithubReadMe)
  }

  render() {
    if (!this.hass) return html``

    return html`
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="实体（必选）"
              .hass=${this.hass}
              .value=${this.config.entity || ''}
              .configValue="entity"
              .includeDomains=${includeDomains}
              @change=${this.valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="名称（可选）"
              .value=${this.config.header?.name || ''}
              .configValue="header.name"
              @input=${this.valueChanged}
            ></ha-textfield>
            <ha-textfield
              label="图标（可选）"
              .value=${this.config.header?.icon || ''}
              .configValue="header.icon"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-entity-picker
              label="开关实体（可选）"
              .hass=${this.hass}
              .value=${this.config?.header?.toggle?.entity || ''}
              .configValue="header.toggle.entity"
              @change=${this.valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
            <ha-textfield
              label="开关标签"
              .value=${this.config?.header?.toggle?.name || ''}
              .configValue="header.toggle.name"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="占位文本（可选）"
              .value=${this.config.fallback || ''}
              .configValue="fallback"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="小数位数（可选）"
              .configValue="decimals"
              .value=${String(this.config.decimals ?? '')}
              .options=${OptionsDecimals}
              @selected=${this.valueChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>

            <ha-textfield
              label="单位（可选）"
              .value=${this.config.unit || ''}
              .configValue="unit"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="布局方向（可选）"
              .configValue="layout.step"
              .value=${this.config.layout?.step ?? ''}
              .options=${OptionsStepLayout}
              @selected=${this.valueChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>

            <ha-select
              label="步进值（可选）"
              .configValue="step_size"
              .value=${String(this.config.step_size ?? '')}
              .options=${OptionsStepSize}
              @selected=${this.valueChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>

          <div class="side-by-side">
            <ha-entity-picker
              label="室内温度传感器（可选）"
              .hass=${this.hass}
              .value=${this.config.sensor_entity || ''}
              .includeDomains=${sensorIncludeDomains}
              @value-changed=${(ev: any) => this._configChanged('sensor_entity', ev.detail.value)}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="side-by-side">
            <ha-select
              label="定时关机"
              .value=${this.config.timer === true || this.config.timer === 'show' ? 'show' : 'hide'}
              .options=${OPTIONS_SHOW_HIDE}
              @selected=${this._timerChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>

          ${this.config.timer === true || this.config.timer === 'show' ? html`
            <div class="side-by-side">
              ${this.config.timer_entity
                ? html`<ha-textfield
                    label="定时器实体（已自动创建）"
                    .value=${this.config.timer_entity}
                    disabled
                  ></ha-textfield>`
                : html`<span class="hint">定时器实体将自动创建...</span>`
              }
            </div>
          ` : nothing}

          <div class="side-by-side">
            <ha-button @click=${this._openLink}>
              配置选项说明
            </ha-button>
            <span>标签、控制、传感器、故障和隐藏选项只能在代码编辑器中配置</span>
          </div>
        </div>
      </div>
    `
  }

  valueChanged(ev: any) {
    if (!this.config || !this.hass) return
    const { target } = ev
    const copy = cloneDeep(this.config)

    const configValue = target.configValue
    if (configValue) {
      // ha-select 使用 @selected 事件，值在 ev.detail.value
      // ha-textfield 使用 @input 事件，值在 target.value
      // ha-entity-picker 使用 @change 事件，值在 target.value
      const value = target.tagName === 'HA-SELECT'
        ? ev.detail?.value ?? target.value
        : target.value
      if (value === '' || value === undefined) {
        // ha-select 不在空值时删除配置
        if (target.tagName !== 'HA-SELECT') {
          delete copy[configValue]
        }
      } else {
        setValue(
          copy,
          configValue,
          target.checked !== undefined ? target.checked : value
        )
      }
    }
    fireEvent(this, 'config-changed', { config: copy })
  }

  _timerChanged(ev: any) {
    const value = ev.detail.value
    const copy = cloneDeep(this.config)
    copy.timer = value === 'show' ? true : 'hide'
    this.config = copy
    fireEvent(this, 'config-changed', { config: copy })
  }

  _configChanged(key: string, value: any) {
    const copy = cloneDeep(this.config)
    if (value === '' || value === undefined) {
      delete copy[key]
    } else {
      ;(copy as any)[key] = value
    }
    this.config = copy
    fireEvent(this, 'config-changed', { config: copy })
  }
}
