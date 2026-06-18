import { LitElement } from 'lit';
import { CardConfig } from './config/card';
import { HASS } from './types';
export default class SimpleThermostatEditor extends LitElement {
    config: CardConfig;
    hass: HASS;
    static styles: any;
    static getStubConfig(): any;
    setConfig(config: CardConfig): void;
    _openLink(): void;
    render(): import("lit-html").TemplateResult<1>;
    valueChanged(ev: any): void;
    _timerChanged(ev: any): void;
    _configChanged(key: string, value: any): void;
}
