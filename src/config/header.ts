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
  auto: 'mdi:radiator',
  cooling: 'mdi:snowflake',
  fan: 'mdi:fan',
  heating: 'mdi:radiator',
  idle: 'mdi:radiator-disabled',
  off: 'mdi:radiator-off',
}

export const MODE_ICONS: Record<string, string> = {
  auto: 'hass:autorenew',
  cool: 'hass:snowflake',
  dry: 'hass:water-percent',
  fan_only: 'hass:fan',
  heat_cool: 'hass:autorenew',
  heat: 'hass:fire',
  off: 'hass:power',
  // 新增 swing_horizontal 模式
  swing_horizontal: 'mdi:fan',
  swing: 'mdi:fan-sync',
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
