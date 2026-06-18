import { LitElement } from 'lit';
import { HeaderData } from './config/header';
import { Service } from './config/service';
import { CardConfig } from './config/card';
import { ControlMode, LooseObject, Sensor, PreparedSensor, HASS } from './types';
interface Values {
    [key: string]: number | string;
}
export default class SimpleThermostat extends LitElement {
    static styles: any;
    config: CardConfig;
    header: false | HeaderData;
    service: Service;
    modes: Array<ControlMode>;
    _hass: HASS;
    entity: LooseObject | undefined;
    sensors: Array<Sensor | PreparedSensor>;
    showSensors: boolean;
    name: string | false;
    stepSize: number;
    _values: Values;
    _updatingValues: boolean;
    _hide: {
        temperature: boolean;
        state: boolean;
    };
    _timerValue: string;
    _timerRemaining: number;
    _timerTotal: number;
    _uiRefreshInterval: ReturnType<typeof setInterval> | null;
    _unsubTimerFinished: (() => void) | null;
    _debouncedSetTemperature: import("debounce-fn").DebouncedFunction<[values: object], void>;
    static getConfigElement(): HTMLElement;
    setConfig(config: CardConfig): void;
    updated(): void;
    set hass(hass: any);
    localize: (label: string, prefix?: string) => any;
    render(): import("lit-html").TemplateResult<1>;
    /** 渲染定时器 UI */
    private _renderTimer;
    /** 从 HA timer 实体同步状态到卡片 */
    private _syncTimerEntity;
    /** 订阅 timer.finished 事件，倒计时结束时自动关空调 */
    private _subscribeTimerFinished;
    /** 取消订阅 timer.finished 事件 */
    private _unsubscribeTimerFinished;
    /** 匹配当前剩余时间对应的定时选项 */
    private _matchTimerOption;
    /** 解析 HA duration 格式（HH:MM:SS 或秒数）为总秒数 */
    private _parseDuration;
    /** 启动 UI 刷新定时器 */
    private _startUIRefresh;
    /** 停止 UI 刷新定时器 */
    private _stopUIRefresh;
    /** 设置定时器 */
    private _setTimer;
    /** 格式化剩余时间 */
    private _formatRemaining;
    _timerCreating: boolean;
    /** 自动创建 timer（带防重复） */
    private _autoCreateTimerEntity;
    /** 删除 timer 实体并清理配置 */
    private _deleteTimerEntity;
    /** 自动创建 HA timer helper 实体 */
    private _createTimerEntity;
    disconnectedCallback(): void;
    toggleEntityChanged: (ev: Event) => void;
    setTemperature(change: number, field: string): void;
    setMode: (type: string, mode: string) => void;
    openEntityPopover: (entityId?: string | null) => void;
    getCardSize(): number;
    getUnit(): string | boolean;
}
export {};
