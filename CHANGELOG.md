# 更新日志

## v3.1.4 (2026-06-18)

### 新增
- 定时关机功能正式启用（基于 HA timer 实体，服务端运行，刷新页面不丢失）
- 自动创建 timer helper 实体（零配置）
- 隐藏定时关机时自动删除 timer 实体，防止残留
- 通过 hass.connection.subscribeEvents 监听 timer.finished 事件自动关空调
- 手动取消定时不会关空调
- 进度条展示倒计时剩余时间
- 空调被关闭时自动取消定时器
- 编辑器新增定时关机开关和 timer_entity 显示

### 改进
- fireEvent 使用 CustomEvent 确保 detail 正确传递
- 升降温按钮逻辑修正（+/- 方向正确）
- 默认布局改为 column
- entity 可用判断简化
- 编辑器重写为 side-by-side 布局，统一 valueChanged 处理
- 图标修正：off → mdi:power，swing 图标简化
- 状态名改为"制冷中/制热中/除湿中/送风中"
- .gitignore 移除 dist 排除，HACS 可下载构建产物

## v3.1.3 (2026-06-18)

### 修复
- `fireEvent` 使用 `CustomEvent` 替代 `Event`，确保 `detail` 正确传递
- 修复图标前缀 `hass:` → `mdi:`，兼容 HA 2025.5+（chevron-up/down）
- 修复 `getModeList` 默认图标从 `hass:radiator` 改为 `mdi:air-conditioner`
- 修复 `entity` 初始值从 `{}` 改为 `undefined`，避免空对象渲染警告
- 修复编辑器 `ha-select` 全部改用 `.options` 属性方式，兼容 HA 2025.5+ Webawesome 重写版
- 修复编辑器 `valueChanged` 中 ha-select 取值逻辑（优先 `ev.detail.value`）
- 修复编辑器缺少 `nothing` 导入导致条件渲染报错
- 修复 `_deleteTimerEntity` 查找逻辑，改用 `config/entity_registry/get` 精确匹配 entity
- 添加 `setConfig` 中 entity 域验证（仅允许 `climate.` 域）

## v3.1.2 (2026-06-17)

### 新增
- 定时关机功能：基于 HA timer 实体，服务端运行，刷新页面不丢失
- 通过 `hass.connection.subscribeEvents` 监听 `timer.finished` 事件自动关空调
- 手动取消定时不会关空调
- 进度条展示倒计时剩余时间
- 空调被关闭时自动取消定时器
- 编辑器新增定时关机开关（timer 实体自动创建）
- 隐藏定时关机时自动删除 timer 实体，防止残留
- 编辑器新增室内温度传感器选择器

## v3.1.1 (2026-06-16)

### 新增
- 全面升级至 lit v3，兼容 Home Assistant 2026.x
- 升级 TypeScript 5.3 + Rollup 4.x
- 中文本地化（模式名、标签、编辑器）
- 新增 `swing_horizontal` 水平摆风模式支持
