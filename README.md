# 小空调

小空调是 [simple-thermostat](https://github.com/nervetattoo/simple-thermostat) 的中文本地化分支，基于原版 v2.2.2 升级而来，兼容 Home Assistant 2026.x。

![预览](https://raw.githubusercontent.com/nervetattoo/simple-thermostat/master/thermostat-card.png)

## 主要变化

- **lit v3**：从 lit-element 2.x 升级，兼容 HASS 2026.x
- **中文界面**：模式名、传感器标签、编辑器全部中文
- **新增摆风**：`swing_horizontal` 水平摆风模式
- **构建链升级**：TypeScript 5.3 + Rollup 4.x

## 安装要求

Home Assistant 2024.9.0 或更高版本（推荐 HASS 2026.3+）

## 安装方式

### 方式一：HACS（推荐）

1. 确保 HACS 已安装
2. **HACS → 集成 → 右上角 `⋮` → 自定义仓库**
3. 仓库填入：`https://github.com/sctale/little-aircon`
4. 类别选「插件」，点添加
5. 搜索「simple-thermostat」找到「小空调」，点击安装

安装完成后，在 Lovelace 资源中添加：

```yaml
resources:
  - url: /hacsfiles/little-aircon/little-aircon.js
    type: module
```

> HACS 会把仓库名作为目录名，所以路径是 `simple-thermostat/` 而不是 `simple-thermostat-zh/`。

### 方式二：手动安装

1. 从 GitHub 下载本仓库 `little-aircon.js`（进入 [dist/](https://github.com/sctale/little-aircon/tree/master/dist) 文件夹，右键点击文件 → 复制链接）
2. 保存到 Home Assistant 配置目录的 `www` 文件夹下
3. 在 Lovelace 资源配置：

```yaml
resources:
  - url: /local/little-aircon.js?v=1
    type: module
```

## 使用方式

在 Lovelace 卡片中添加：

```yaml
type: custom:little-aircon
entity: climate.hvac
```

> **注意**：卡类型名是 `little-aircon`（与原版 `simple-thermostat` 不同），两个版本可以同时安装，不会冲突。

### 基础示例

```yaml
type: custom:little-aircon
entity: climate.hvac
header:
  name: 我的空调
```

### 紧凑模式（隐藏控制按钮）

```yaml
type: custom:little-aircon
entity: climate.hvac
layout:
  step: row
header: false
control: false
```

### 带传感器

```yaml
type: custom:little-aircon
entity: climate.hvac
sensors:
  - entity: sensor.humidity
    label: 室内湿度
  - entity: sensor.power_consumption
    label: 今日能耗
```

## 配置参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `entity` | string | 温控实体 ID **（必填）** |
| `header` | false / object | 标题栏配置 |
| `setpoints` | false / object | 温度设定点配置 |
| `control` | false / string[] / object | 控制模式配置 |
| `sensors` | false / array | 传感器列表 |
| `layout.step` | row / column | 温度调节按钮排列方向 |
| `layout.mode.names` | boolean | 是否显示模式名称 |
| `layout.mode.icons` | boolean | 是否显示模式图标 |
| `layout.sensors.type` | list / table | 传感器渲染方式 |
| `service` | object | 自定义服务调用 |
| `unit` | string / bool | 温度单位（false 隐藏） |
| `decimals` | number | 小数位数（0 或 1） |
| `fallback` | string | 无数据时显示的占位文本 |

## 与原版的主要区别

| 对比项 | 原版 | 小空调 |
|--------|------|----------|
| 卡类型名 | `simple-thermostat` | `little-aircon` |
| lit 版本 | lit-element 2.x | lit 3.x |
| HASS 兼容性 | ~2025.x | 2026.x+ |
| 语言 | 英文 | 中文（默认） |
| swing_horizontal | ❌ | ✅ |
| 构建工具 | Rollup 2.x | Rollup 4.x |

## 更新日志

### v3.0.63

- 同 v3.0.62，重新发布以便 HACS 正常检测更新（修复 v3.0.62 强制推送导致的缓存问题）
- 移除 v3.0.58 中的定时器（定时关机）功能，其他代码保持 v3.0.58 原样

### v3.0.62

- 移除 v3.0.58 中的定时器（定时关机）功能，其他代码保持 v3.0.58 原样

### v3.0.58

- 全面升级至 lit v3，兼容 Home Assistant 2026.x
- 升级 TypeScript 5.3 + Rollup 4.x
- 中文本地化（模式名、标签、编辑器）
- 新增 `swing_horizontal` 水平摆风模式支持

---

感谢原版作者 [Raymond Julin (@nervetattoo)](https://github.com/nervetattoo)。
