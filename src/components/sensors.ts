import { html, nothing } from 'lit'
import formatNumber from '../formatNumber'
import renderInfoItem from './infoItem'
import { wrapSensors } from './templated'

// 传感器区域的中文标签
const ZH_SENSOR_LABELS: Record<string, string> = {
  current_humidity: '当前湿度',
  current_temperature: '当前温度',
  humidity: '湿度',
  temperature: '温度',
  // fallback
}

export default function renderSensors({
  _hide,
  entity,
  unit,
  hass,
  sensors,
  config,
  localize,
  openEntityPopover,
}) {
  const {
    state,
    attributes: { hvac_action: action, current_temperature: current },
  } = entity

  const showLabels = config?.layout?.sensors?.labels ?? true

  // 获取中文状态名
  const getZhState = (s: string): string => {
    const map: Record<string, string> = {
      off: '关闭',
      heat: '制热',
      cool: '制冷',
      auto: '自动',
      dry: '除湿',
      fan_only: '送风',
      heat_cool: '冷热',
      idle: '待机',
      heating: '加热中',
      cooling: '制冷中',
      drying: '除湿中',
      fan: '送风中',
    }
    return map[s] ?? s
  }

  // 获取中文动作描述
  const getZhAction = (a: string): string => {
    const map: Record<string, string> = {
      idle: '待机',
      heating: '正在制热',
      cooling: '正在制冷',
      drying: '正在除湿',
      fan: '正在送风',
      off: '已关闭',
    }
    return map[a] ?? a
  }

  let stateString = getZhState(state)
  if (action) {
    const actionZh = getZhAction(action)
    // 当 action 与 state 语义重复时（如 heating/heat），只显示 action
    if (actionZh !== stateString) {
      stateString = actionZh
    }
  }

  const sensorHtml = [
    renderInfoItem({
      hide: _hide.temperature,
      state: `${formatNumber(current, config)}${unit || ''}`,
      hass,
      details: {
        heading: showLabels
          ? config?.label?.temperature ?? '当前温度'
          : false,
      },
    }),
    renderInfoItem({
      hide: _hide.state,
      state: stateString,
      hass,
      details: {
        heading: showLabels
          ? config?.label?.state ?? '运行状态'
          : false,
      },
    }),
    ...(sensors.map(({ name, state, ...rest }) => {
      return renderInfoItem({
        state,
        hass,
        localize,
        openEntityPopover,
        details: {
          ...rest,
          heading: showLabels && name,
        },
      })
    }) || null),
  ].filter((it) => it !== null)

  return html`${wrapSensors(config, sensorHtml)}`
}
