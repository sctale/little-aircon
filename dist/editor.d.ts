import { LitElement, nothing } from 'lit';
import { CardConfig } from './config/card';
import { HASS } from './types';
export default class SimpleThermostatEditor extends LitElement {
    hass: HASS;
    private _config;
    static styles: any;
    static getStubConfig(): {
        header: {};
        layout: {
            mode: {};
        };
    };
    setConfig(config: CardConfig): void;
    _openLink(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _entityPicked;
    private _decimalsChanged;
    private _stepLayoutChanged;
    private _stepSizeChanged;
    private _modeNamesChanged;
    private _modeIconsChanged;
    private _modeHeadingsChanged;
    private _presetControlChanged;
    private _fanControlChanged;
    private _updateControlList;
    private _configChanged;
}
