import { LooseObject } from '../types';
export interface Service {
    domain: string;
    service: string;
    data?: LooseObject;
}
export default function parseService(service: false | Service): Service;
