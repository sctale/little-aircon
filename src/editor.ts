import { LitElement, html, nothing } from 'lit'
import { property, state } from 'lit/decorators.js'
import styles from './styles.css'
import fireEvent from './fireEvent'
import { name } from '../package.json'
import { CardConfig } from './config/card'
import { HASS } from './types'

const OptionsDecimals = [0, 1]
const OptionsStepSize = [0.5, 1]
const OptionsStepLayout = ['column', 'row']
const includeDomains = ['climate']
const GithubReadMe = 'https://github.com/sctale/little-aircon/blob/master/README.md'

const cloneDeep = (obj: any) => JSON.parse(JSON.stringify(obj))

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

    const config = this._config

    return html`
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="实体（必选）"
              .hass=${this.hass}
              .value=${config.entity || ''}
              .includeDomains=${includeDomains}
              @value-changed=${this._entityPicked}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="名称（可选）"
              .value=${(config as any).header?.name || ''}
              @input=${(ev) => this._configChanged('header.name', ev.target.value)}
            ></ha-textfield>
            <ha-textfield
              label="图标（可选）"
              .value=${(config as any).header?.icon || ''}
              @input=${(ev) => this._configChanged('header.icon', ev.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-entity-picker
              label="开关实体（可选）"
              .hass=${this.hass}
              .value=${(config as any)?.header?.toggle?.entity || ''}
              @value-changed=${(ev) => this._configChanged('header.toggle.entity', ev.detail.value)}
              allow-custom-entity
            ></ha-entity-picker>
            <ha-textfield
              label="开关标签"
              .value=${(config as any)?.header?.toggle?.name || ''}
              @input=${(ev) => this._configChanged('header.toggle.name', ev.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="占位文本（可选）"
              .value=${config.fallback || ''}
              @input=${(ev) => this._configChanged('fallback', ev.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="小数位数（可选）"
              @selected=${(ev) => this._configChanged('decimals', ev.target.value)}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            >
              ${OptionsDecimals.map(
                (item) =>
                  html`<ha-list-item .value=${String(item)} ?selected=${config.decimals === item}>${item}</ha-list-item>`
              )}
            </ha-select>

            <ha-textfield
              label="单位（可选）"
              .value=${config.unit || ''}
              @input=${(ev) => this._configChanged('unit', ev.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="布局方向（可选）"
              @selected=${(ev) => this._configChanged('layout.step', ev.target.value)}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            >
              ${OptionsStepLayout.map(
                (item) =>
                  html`<ha-list-item .value=${item} ?selected=${(config as any).layout?.step === item}>${item}</ha-list-item>`
              )}
            </ha-select>

            <ha-select
              label="步进值（可选）"
              @selected=${(ev) => this._configChanged('step_size', ev.target.value)}
              @closed=${(ev) => ev.stopPropagation()}
              fixedMenuPosition
            >
              ${OptionsStepSize.map(
                (item) =>
                  html`<ha-list-item .value=${String(item)} ?selected=${config.step_size === item}>${item}</ha-list-item>`
              )}
            </ha-select>
          </div>

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

  private _entityPicked(ev: any) {
    const value = ev.detail?.value ?? ev.target?.value
    if (value === undefined) return
    this._configChanged('entity', value)
  }

  private _configChanged(path: string, value: any) {
    if (!this._config || !this.hass) return
    const copy = cloneDeep(this._config)

    if (value === '' || value === undefined || value === null) {
      // Don't delete entity - it's required
      if (path !== 'entity') {
        deleteNestedKey(copy, path)
      }
    } else {
      setNestedValue(copy, path, value)
    }

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
