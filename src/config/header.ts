import { HASS, LooseObject } from '../types'

export interface HAState {
  state: string | number
  entity_id: string
  attributes: LooseObject
  last_changed?: string
  last_updated?: string
}

export interface Fault {
  entity: string
  icon?: string
  hide_inactive?: boolean
}

export const STATE_ICONS: Record<string, string> = {
  auto: 'mdi:autorenew',
  cooling: 'mdi:snowflake',
  fan: 'mdi:fan',
  heating: 'mdi:fire',
  idle: 'mdi:air-conditioner',
  off: 'mdi:air-conditioner',
  drying: 'mdi:water-percent',
}

export const MODE_ICONS: Record<string, string> = {
  // HVAC 模式
  auto: 'mdi:autorenew',
  cool: 'mdi:snowflake',
  dry: 'mdi:water-percent',
  fan_only: 'mdi:fan',
  heat_cool: 'mdi:autorenew',
  heat: 'mdi:fire',
  off: 'mdi:air-conditioner',
  // 预设模式
  none: 'mdi:cancel',
  eco: 'mdi:leaf',
  away: 'mdi:home-alert',
  boost: 'mdi:rocket-launch',
  comfort: 'mdi:sofa',
  home: 'mdi:home',
  sleep: 'mdi:power-sleep',
  activity: 'mdi:run',
  // 风速模式（按低/中/高映射数字图标）
  silent: 'mdi:fan-chevron-down',
  low: 'mdi:fan-speed-1',
  medium_low: 'mdi:fan-speed-1',
  medium: 'mdi:fan-speed-2',
  medium_high: 'mdi:fan-speed-2',
  high: 'mdi:fan-speed-3',
  highest: 'mdi:fan-speed-3',
  full: 'mdi:fan-chevron-up',
  auto_mode: 'mdi:fan-auto',
  // swing 模式
  vertical: 'mdi:arrow-up-down',
  horizontal: 'mdi:arrow-left-right',
  both: 'mdi:arrow-all',
  swing_horizontal: 'mdi:arrow-left-right',
  swing: 'mdi:arrow-up-down',
  on: 'mdi:toggle-switch',
  // 定时器
  timer_off: 'mdi:close',
  timer_30: '',
  timer_60: '',
  timer_90: '',
  timer_120: '',
}

type Icon = string | false | LooseObject
type Name = string | false

export interface HeaderConfig {
  name?: Name
  icon?: Icon
  faults?: Array<Fault>
  toggle?: ToggleConfig
}

export interface HeaderData {
  name?: Name
  icon: Icon
  faults?: Array<Fault>
  toggle?: Toggle
}

export interface Toggle {
  entity: HAState
  label: string
}

export type ToggleConfig = { entity: string; name?: string | boolean }

export default function parseHeaderConfig(
  config: false | HeaderConfig,
  entity: any,
  hass: HASS
): false | HeaderData {
  if (config === false) return false

  let name: Name
  if (typeof config?.name === 'string') {
    name = config.name
  } else if (config?.name === false) {
    name = false
  } else {
    name = entity.attributes.friendly_name
  }

  let icon: Icon = entity.attributes.hvac_action ? STATE_ICONS : MODE_ICONS
  if (typeof config?.icon !== 'undefined') {
    icon = config.icon
  }

  return {
    name,
    icon,
    toggle: config?.toggle ? parseToggle(config.toggle, hass) : null,
    faults: parseFaults(config?.faults, hass),
  }
}

function parseToggle(config: ToggleConfig, hass: HASS): Toggle {
  const entity: HAState = hass.states![config.entity]

  let label = ''
  if (config?.name === true) {
    label = entity.attributes.name
  } else {
    label = (config?.name as string) ?? ''
  }

  return { entity, label }
}

function parseFaults(config: Array<Fault>, hass: HASS) {
  if (Array.isArray(config)) {
    return config.map(({ entity, ...rest }: Fault) => {
      return {
        ...rest,
        state: hass.states![entity],
        entity,
      }
    })
  }
  return []
}
