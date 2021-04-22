import { AttrInputType } from './enums';
export interface AttrConfiguration {
    title: string;
    type: AttrInputType;
    with?: string[];
    config?: AttrConfigurations;
    default?: any;
    gridata?: Array<{
        name: string;
        cover: string;
        value: any;
    }>;
    options?: Array<{
        name?: string;
        data: any;
        map: any;
    }>;
    connect?: string[];
    added?: boolean;
}
export interface AttrConfigurations {
    [x: string]: AttrConfiguration;
}
export declare const attrs: AttrConfigurations;
