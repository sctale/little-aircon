import { HeaderConfig } from './header'
import { LooseObject, ConfigSensor, TemplatedSensor } from '../types'
import { Service } from './service'
import { Setpoints } from './setpoints'

export enum MODES {
  HVAC = 'hvac',
  FAN = 'fan',
  PRESET = 'preset',
  SWING = 'swing',
  // 新增水平摆风模式支持
  SWING_HORIZONTAL = 'swing_horizontal',
}

export type ModeValue = {
  name?: string | false
  icon?: string | false
  include?: boolean
}

export type ModeControlObject = Record<string, boolean | ModeValue> & {
  _name: string
  _hide_when_off: boolean
}

export type ModeControlValue = boolean | ModeControlObject
type ModeControl = {
  hvac: ModeControlValue
  fan: ModeControlValue
  preset: ModeControlValue
  swing: ModeControlValue
  swing_horizontal: ModeControlValue
}

interface CardConfig {
  entity?: string
  header: false | HeaderConfig
  control?: false | ModeControl | string[]
  sensors?: false | Array<ConfigSensor & TemplatedSensor>
  version: 2 | 3
  setpoints?: Setpoints
  decimals?: number
  step_size?: number
  variables?: LooseObject
  layout?: {
    mode: {
      names: boolean
      icons: boolean
      headings: boolean
    }
    sensors: {
      type: 'table' | 'list'
      labels: boolean
    }
    step: 'row' | 'column'
  }
  unit?: boolean | string
  fallback?: string
  service?: Service
  hide?: {
    temperature?: boolean
    state?: boolean
  }
  label?: {
    temperature?: string
    state?: string
  }
}

export { CardConfig }
