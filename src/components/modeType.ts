import { html, nothing } from 'lit'
import { ControlMode, HVAC_MODES } from '../types'

// 中文本地化映射（覆盖上游英文 key）
const ZH_MODE_NAMES: Record<string, string> = {
  // HVAC 模式
  off: '关闭',
  heat: '制热',
  cool: '制冷',
  auto: '自动',
  dry: '除湿',
  fan_only: '送风',
  heat_cool: '冷热',
  // 预设模式
  none: '无',
  eco: '节能',
  away: '离家',
  boost: '增强',
  comfort: '舒适',
  home: '在家',
  sleep: '睡眠',
  activity: '活动',
  // swing 模式
  vertical: '上下摆风',
  horizontal: '左右摆风',
  both: '全方位摆风',
  // fan 模式
  low: '低速',
  medium: '中速',
  high: '高速',
  auto_mode: '自动',
}

interface ModeTypeOptions {
  state: string
  mode: ControlMode
  modeOptions
  localize
  setMode
}

export default function renderModeType({
  state,
  mode: options,
  modeOptions,
  localize,
  setMode,
}: ModeTypeOptions) {
  const { type, hide_when_off, mode = 'none', list, name } = options
  if (list.length === 0 || (hide_when_off && state === HVAC_MODES.OFF)) {
    return nothing
  }

  const getZhName = (value: string): string => {
    return ZH_MODE_NAMES[value] ?? localize(value)
  }

  const getHeadingTitle = (): string => {
    if (name) return typeof name === 'string' ? name : ''
    const headingMap: Record<string, string> = {
      hvac: '运行模式',
      preset: '预设模式',
      fan: '风速模式',
      swing: '摆风模式',
      swing_horizontal: '左右摆风',
    }
    return headingMap[type] ?? `${type}_mode`
  }

  const maybeRenderName = (modeName: string | false) => {
    if (modeName === false) return nothing
    if (modeOptions?.names === false) return nothing
    return html`${modeName}`
  }

  const maybeRenderIcon = (icon: string) => {
    if (!icon) return nothing
    if (modeOptions?.icons === false) return nothing
    return html` <ha-icon class="mode-icon" .icon=${icon}></ha-icon> `
  }

  const title = getHeadingTitle()
  const headings = modeOptions?.headings ?? true

  return html`
    <div class="modes ${headings ? 'heading' : ''}">
      ${headings ? html` <div class="mode-title">${title}</div> ` : nothing}
      ${list.map(
        ({ value, icon }) => html`
          <div
            class="mode-item ${value === mode ? 'active ' + value : ''}"
            @click=${() => setMode(type, value)}
          >
            ${maybeRenderIcon(icon)} ${maybeRenderName(getZhName(value))}
          </div>
        `
      )}
    </div>
  `
}
