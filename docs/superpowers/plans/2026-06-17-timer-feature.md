# 定时关机功能实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为小空调卡片添加定时关机功能，用户开启后卡片自动创建 HA timer helper，倒计时结束自动关闭空调

**Architecture:** 卡片通过 HA WebSocket API (`config_entries/flow`) 自动创建 timer helper 实体，用 `hass.connection.subscribeEvents` 监听 `timer.finished` 事件触发关机。前端 setInterval 仅用于每秒刷新进度条 UI。用户零配置——只需在编辑器中开启"定时关机"开关。

**Tech Stack:** Lit 3 + TypeScript + HA WebSocket API + HA timer integration

---

## 文件结构

| 文件 | 职责 |
|------|------|
| `src/main.ts` | 定时器核心逻辑：创建 timer、启动/取消、事件监听、UI 渲染 |
| `src/config/card.ts` | 新增 `timer_entity` 配置项 |
| `src/config/header.ts` | 定时器图标映射（已有，保留） |
| `src/editor.ts` | 编辑器：定时开关 + 自动创建 timer 提示 |
| `src/styles.css` | 进度条样式（已有，保留） |
| `src/components/modeType.ts` | 定时器中文映射（已有，保留） |

---

## 核心流程

### 1. 用户开启定时关机

```
用户在编辑器开启"定时关机"
  → 卡片检测是否已有 timer_entity
  → 没有 → 自动调用 HA config flow 创建 timer helper
  → 创建成功 → 将 entity_id 写入卡片配置
  → 编辑器显示 timer_entity（已自动配置）
```

### 2. 用户点击定时选项

```
用户点击"1时"
  → 调用 timer.start 服务（duration: "01:00:00"）
  → 订阅 timer.finished 事件
  → 启动前端 setInterval 每秒刷新进度条
  → 进度条从 100% 逐渐缩短
```

### 3. 倒计时结束

```
timer 实体倒计时归零
  → HA 触发 timer.finished 事件
  → 卡片收到事件 → 调用 climate.turn_off 关闭空调
  → 取消事件订阅
  → 进度条消失，选项回到"关闭"
```

### 4. 用户手动取消

```
用户点击"关闭"
  → 调用 timer.cancel 服务
  → 取消 timer.finished 事件订阅（防止误触发关机）
  → 进度条消失
  → 空调不受影响
```

### 5. 页面刷新恢复

```
卡片 connectedCallback
  → 读取 timer_entity 配置
  → 检查 timer 实体状态
  → active → 恢复进度条 + 重新订阅 timer.finished
  → idle → 不显示进度条
```

---

## Task 1: 恢复定时器代码并重构

**Files:**
- Modify: `src/main.ts`

- [ ] **Step 1: 移除 _renderTimer 中的 `return nothing` 禁用逻辑**

将 `_renderTimer` 方法开头的 `return nothing` 删除，恢复完整的定时器 UI 渲染代码（取消 `/* */` 注释块）。

- [ ] **Step 2: 移除 _syncTimerEntity 中的 `return` 禁用逻辑**

将 `_syncTimerEntity` 方法开头的 `return` 删除，恢复完整的状态同步代码。

- [ ] **Step 3: 移除 _setTimer 中的 `return` 禁用逻辑**

将 `_setTimer` 方法开头的 `return` 删除，恢复完整的服务调用代码。

- [ ] **Step 4: 移除 _subscribeTimerFinished 和 _unsubscribeTimerFinished 中的注释**

恢复这两个方法的完整实现代码。

- [ ] **Step 5: 新增 _createTimerEntity 方法**

```typescript
/** 自动创建 HA timer helper 实体 */
private async _createTimerEntity(): Promise<string | null> {
  const conn = (this._hass as any)?.connection
  if (!conn) return null

  try {
    // 1. 发起 config flow
    const initResult = await conn.sendMessagePromise({
      type: 'config_entries/flow/initiate',
      handler: 'timer',
      show_advanced: false,
    })

    const flowId = initResult.flow_id

    // 2. 提交 flow step（填写 timer 名称等）
    const entityName = `小空调定时器_${this.config.entity.split('.').pop()}`
    const stepResult = await conn.sendMessagePromise({
      type: 'config_entries/flow/step',
      flow_id: flowId,
      user_input: {
        name: entityName,
        duration: '00:30:00',
        restore: true,
      },
    })

    // 3. 从结果中提取 entity_id
    if (stepResult.result?.entity_id) {
      return stepResult.result.entity_id
    }

    // 如果 result 不在 step 中，可能需要额外查询
    // 尝试从 hass.states 中查找刚创建的 timer
    const timerStates = Object.keys(this._hass.states).filter(
      (id) => id.startsWith('timer.') && id.includes('xiao_kong_tiao')
    )
    return timerStates.length > 0 ? timerStates[0] : null
  } catch (err) {
    console.error('小空调：创建 timer 失败', err)
    return null
  }
}
```

- [ ] **Step 6: 在 hass setter 中调用 _syncTimerEntity 时增加 timer_entity 检查**

当 `timer` 配置开启但 `timer_entity` 未设置时，自动创建 timer：

```typescript
// 在 hass setter 的 _syncTimerEntity 调用前添加
if (this.config?.timer && this.config.timer !== 'hide' && !this.config?.timer_entity) {
  this._createTimerEntity().then((entityId) => {
    if (entityId) {
      this.config = { ...this.config, timer_entity: entityId }
      // 触发配置更新
      fireEvent(this, 'config-changed', { config: this.config })
    }
  })
}
```

- [ ] **Step 7: 构建验证**

Run: `cd /workspace && npm run build`
Expected: 构建成功，无 TypeScript 错误

---

## Task 2: 更新编辑器

**Files:**
- Modify: `src/editor.ts`

- [ ] **Step 1: 恢复定时器配置选项**

取消编辑器中定时器相关 HTML 注释，恢复"定时关机"选择框和 timer_entity 选择器。

- [ ] **Step 2: 修改 timer_entity 选择器为只读显示**

将 timer_entity 的 `ha-entity-picker` 改为只读文本显示，因为 timer_entity 是自动创建的：

```typescript
${config.timer === true || config.timer === 'show' ? html`
  <div class="form-group">
    <label>定时器实体</label>
    ${config.timer_entity
      ? html`<span class="hint">${config.timer_entity}（已自动创建）</span>`
      : html`<span class="hint">开启后将自动创建...</span>`
    }
  </div>
` : nothing}
```

- [ ] **Step 3: 构建验证**

Run: `cd /workspace && npm run build`
Expected: 构建成功

---

## Task 3: 完善定时器 UI 和交互

**Files:**
- Modify: `src/main.ts`

- [ ] **Step 1: 改进 _matchTimerOption 匹配逻辑**

倒计时进行中（如还剩 25 分钟），`Math.round` 不匹配任何选项。改为：只要 timer 是 active 状态，保留上次选中的选项高亮：

```typescript
private _matchTimerOption(remainingSeconds: number): string {
  // 优先精确匹配
  const minutes = Math.round(remainingSeconds / 60)
  const match = TIMER_OPTIONS.find((o) => o.minutes === minutes)
  if (match) return match.value
  // 未精确匹配时保留当前选中项（倒计时进行中）
  if (this._timerValue !== 'timer_off') return this._timerValue
  return 'timer_off'
}
```

- [ ] **Step 2: 处理空调已关闭时定时器状态**

当空调被关闭时（非定时器触发），如果定时器还在运行，应自动取消定时器：

在 hass setter 中添加：
```typescript
// 空调被关闭时，取消正在运行的定时器
const climateEntity = this._hass.states?.[this.config.entity]
if (climateEntity?.state === 'off' && this._timerValue !== 'timer_off') {
  const timerEntityId = this.config?.timer_entity
  if (timerEntityId) {
    this._hass.callService('timer', 'cancel', { entity_id: timerEntityId })
  }
}
```

- [ ] **Step 3: 构建验证**

Run: `cd /workspace && npm run build`
Expected: 构建成功

---

## Task 4: 发布和文档更新

**Files:**
- Modify: `package.json` (版本号)
- Modify: `README.md`

- [ ] **Step 1: 更新版本号**

`package.json` version 递增

- [ ] **Step 2: 更新 README**

在配置参数表中添加 `timer` 参数说明，在更新日志中添加新版本记录

- [ ] **Step 3: 构建、提交、打 tag、推送**

```bash
cd /workspace && npm run build
git add -A && git commit -m "feat: 定时关机功能 - 自动创建 timer helper"
git tag v3.1.0 && git push origin master --tags
```

- [ ] **Step 4: 创建 GitHub Release 并上传构建产物**

---

## 测试计划

### 手动测试清单

| # | 测试场景 | 预期结果 | 通过 |
|---|---------|---------|------|
| 1 | 编辑器开启"定时关机" | 自动创建 timer helper 实体，编辑器显示 entity_id | [ ] |
| 2 | 点击"30分"定时选项 | timer.start 被调用，进度条出现并开始缩短 | [ ] |
| 3 | 点击"1时"定时选项 | timer.start 被调用（覆盖旧定时），进度条重新从 100% 开始 | [ ] |
| 4 | 点击"关闭"取消定时 | timer.cancel 被调用，进度条消失，空调不受影响 | [ ] |
| 5 | 倒计时自然结束 | timer.finished 事件触发 climate.turn_off，空调关闭 | [ ] |
| 6 | 刷新页面后恢复 | 进度条恢复显示，剩余时间正确 | [ ] |
| 7 | 切换到其他仪表板页面再切回 | 进度条正常显示 | [ ] |
| 8 | 手动关闭空调 | 定时器自动取消 | [ ] |
| 9 | 未配置 timer_entity 时 | 显示提示"请在配置中指定定时器实体" | [ ] |
| 10 | timer_entity 不存在时 | 不崩溃，显示友好提示 | [ ] |
| 11 | 多个空调卡片 | 各自使用独立的 timer 实体，互不干扰 | [ ] |
| 12 | HA 重启后 | timer 恢复（需开启 restore），卡片重新订阅事件 | [ ] |

### 边界条件测试

| # | 测试场景 | 预期结果 | 通过 |
|---|---------|---------|------|
| 1 | 定时器创建失败（权限不足等） | 不崩溃，显示错误提示 | [ ] |
| 2 | 网络断开后重连 | 定时器状态正确恢复 | [ ] |
| 3 | 快速连续点击不同定时选项 | 最后一次点击生效，无重复调用 | [ ] |
| 4 | 定时结束瞬间刷新页面 | 空调仍被关闭（timer.finished 在服务端触发） | [ ] |

### 自动创建 timer 的 config flow 测试

| # | 测试场景 | 预期结果 | 通过 |
|---|---------|---------|------|
| 1 | 首次开启定时关机 | 自动创建 timer helper，名称含空调实体名 | [ ] |
| 2 | 已有 timer_entity 配置 | 不重复创建 | [ ] |
| 3 | 创建后配置自动保存 | timer_entity 写入卡片配置 | [ ] |
| 4 | 删除卡片后 | timer helper 仍保留在 HA 中（需手动删除） | [ ] |
