import { LitElement, html, nothing } from 'lit'
import { property, state } from 'lit/decorators.js'
import styles from './styles.css'
import fireEvent from './fireEvent'
import { name } from '../package.json'
import { CardConfig } from './config/card'
import { HASS } from './types'

const includeDomains = ['climate']
const sensorIncludeDomains = ['sensor']
const GithubReadMe = 'https://github.com/sctale/little-aircon/blob/master/README.md'

const cloneDeep = (obj: any) => JSON.parse(JSON.stringify(obj))

const OPTIONS_DECIMALS = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
]

const OPTIONS_STEP_SIZE = [
  { value: '0.5', label: '0.5' },
  { value: '1', label: '1' },
]

const OPTIONS_STEP_LAYOUT = [
  { value: 'column', label: '上下' },
  { value: 'row', label: '左右' },
]

const OPTIONS_SHOW_HIDE = [
  { value: 'show', label: '显示' },
  { value: 'hide', label: '隐藏' },
]

export default class SimpleThermostatEditor extends LitElement {
  @property({ attribute: false }) hass!: HASS
  @state() private _config!: CardConfig

  static styles = styles

  static getStubConfig() {
    return { header: {}, layout: { mode: {} } }
  }

  setConfig(config: CardConfig) {
    this._config = config
  }

  _openLink() {
    window.open(GithubReadMe)
  }

  protected render() {
    if (!this.hass || !this._config) {
      return nothing
    }

    const config = this._config as any
    // 获取当前 control 列表（用于判断预设/风速是否显示）
    let controlList: string[]
    if (Array.isArray(config.control)) {
      controlList = config.control
    } else if (typeof config.control === 'object' && config.control !== null) {
      controlList = Object.keys(config.control)
    } else {
      controlList = ['hvac', 'preset']  // 默认值
    }

    return html`
      <div class="card-config">
        <div class="form-group">
          <div class="group-title">基本设置</div>
          <ha-entity-picker
            label="实体（必选）"
            .hass=${this.hass}
            .value=${config.entity || ''}
            .includeDomains=${includeDomains}
            @value-changed=${this._entityPicked}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="row">
            <ha-textfield
              label="名称"
              .value=${config.header?.name || ''}
              @input=${(ev) => this._configChanged('header.name', ev.target.value)}
            ></ha-textfield>
            <ha-textfield
              label="图标"
              .value=${config.header?.icon || ''}
              @input=${(ev) => this._configChanged('header.icon', ev.target.value)}
            ></ha-textfield>
          </div>
          <ha-entity-picker
            label="室内温度传感器（可选）"
            .hass=${this.hass}
            .value=${config.sensor_entity || ''}
            .includeDomains=${sensorIncludeDomains}
            @value-changed=${(ev) => this._configChanged('sensor_entity', ev.detail.value)}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="row">
            <ha-textfield
              label="占位文本"
              .value=${config.fallback || ''}
              @input=${(ev) => this._configChanged('fallback', ev.target.value)}
            ></ha-textfield>
            <ha-textfield
              label="单位"
              .value=${config.unit || ''}
              @input=${(ev) => this._configChanged('unit', ev.target.value)}
            ></ha-textfield>
          </div>
        </div>

        <div class="form-group">
          <div class="group-title">温度与布局</div>
          <div class="row">
            <ha-select
              label="小数位数"
              .value=${config.decimals != null ? String(config.decimals) : ''}
              .options=${OPTIONS_DECIMALS}
              @selected=${this._decimalsChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
            <ha-select
              label="步进值"
              .value=${config.step_size != null ? String(config.step_size) : ''}
              .options=${OPTIONS_STEP_SIZE}
              @selected=${this._stepSizeChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>
          <div class="row">
            <ha-select
              label="布局方向"
              .value=${config.layout?.step ?? ''}
              .options=${OPTIONS_STEP_LAYOUT}
              @selected=${this._stepLayoutChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>
        </div>

        <div class="form-group">
          <div class="group-title">模式控制</div>
          <div class="row">
            <ha-select
              label="预设模式"
              .value=${controlList.includes('preset') ? 'show' : 'hide'}
              .options=${OPTIONS_SHOW_HIDE}
              @selected=${this._presetControlChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
            <ha-select
              label="风速模式"
              .value=${controlList.includes('fan') ? 'show' : 'hide'}
              .options=${OPTIONS_SHOW_HIDE}
              @selected=${this._fanControlChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>
          <div class="row">
            <ha-select
              label="模式文字"
              .value=${config.layout?.mode?.names !== false ? 'show' : 'hide'}
              .options=${OPTIONS_SHOW_HIDE}
              @selected=${this._modeNamesChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
            <ha-select
              label="模式图标"
              .value=${config.layout?.mode?.icons !== false ? 'show' : 'hide'}
              .options=${OPTIONS_SHOW_HIDE}
              @selected=${this._modeIconsChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>
          <div class="row">
            <ha-select
              label="模式标题"
              .value=${config.layout?.mode?.headings !== false ? 'show' : 'hide'}
              .options=${OPTIONS_SHOW_HIDE}
              @selected=${this._modeHeadingsChanged}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>
        </div>

        <div class="form-group">
          <div class="group-title">开关</div>
          <ha-entity-picker
            label="开关实体（可选）"
            .hass=${this.hass}
            .value=${config.header?.toggle?.entity || ''}
            @value-changed=${(ev) => this._configChanged('header.toggle.entity', ev.detail.value)}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="row">
            <ha-textfield
              label="开关标签"
              .value=${config.header?.toggle?.name || ''}
              @input=${(ev) => this._configChanged('header.toggle.name', ev.target.value)}
            ></ha-textfield>
          </div>
        </div>

        <div class="form-group">
          <ha-button @click=${this._openLink}>
            配置选项说明
          </ha-button>
          <span class="hint">标签、控制、传感器、故障和隐藏选项只能在代码编辑器中配置</span>
        </div>
      </div>
    `
  }

  private _entityPicked(ev: any) {
    const value = ev.detail?.value ?? ev.target?.value
    if (value === undefined) return
    this._configChanged('entity', value)
  }

  private _decimalsChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._configChanged('decimals', Number(value))
  }

  private _stepLayoutChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._configChanged('layout.step', value)
  }

  private _stepSizeChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._configChanged('step_size', Number(value))
  }

  private _modeNamesChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._configChanged('layout.mode.names', value === 'hide' ? false : true)
  }

  private _modeIconsChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._configChanged('layout.mode.icons', value === 'hide' ? false : true)
  }

  private _modeHeadingsChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._configChanged('layout.mode.headings', value === 'hide' ? false : true)
  }

  private _presetControlChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._updateControlList('preset', value === 'show')
  }

  private _fanControlChanged(ev: any) {
    const value = ev.detail?.value
    if (value === undefined) return
    this._updateControlList('fan', value === 'show')
  }

  private _updateControlList(modeType: string, show: boolean) {
    if (!this._config || !this.hass) return
    const config = this._config as any

    // 获取当前 control 列表
    let controlList: string[]
    if (Array.isArray(config.control)) {
      controlList = [...config.control]
    } else if (typeof config.control === 'object' && config.control !== null) {
      // 对象格式：提取 key 列表
      controlList = Object.keys(config.control)
    } else {
      // 未设置或 false：使用默认值
      controlList = ['hvac', 'preset']
    }

    if (show && !controlList.includes(modeType)) {
      controlList.push(modeType)
    } else if (!show) {
      controlList = controlList.filter((m) => m !== modeType)
    }

    // 确保 hvac 始终存在
    if (!controlList.includes('hvac')) {
      controlList.unshift('hvac')
    }

    this._configChanged('control', controlList)
  }

  private _configChanged(path: string, value: any) {
    if (!this._config || !this.hass) return
    const copy = cloneDeep(this._config)

    if (value === '' || value === undefined || value === null) {
      if (path !== 'entity') {
        deleteNestedKey(copy, path)
      }
    } else {
      setNestedValue(copy, path, value)
    }

    this._config = copy
    fireEvent(this, 'config-changed', { config: copy })
  }
}

function setNestedValue(obj: any, path: string, value: any) {
  const parts = path.split('.')
  let o = obj
  while (parts.length > 1) {
    const part = parts.shift()!
    if (!o[part]) o[part] = {}
    o = o[part]
  }
  o[parts[0]] = value
}

function deleteNestedKey(obj: any, path: string) {
  const parts = path.split('.')
  let o = obj
  while (parts.length > 1) {
    const part = parts.shift()!
    if (!o[part]) return
    o = o[part]
  }
  delete o[parts[0]]
}
