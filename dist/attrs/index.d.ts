import { AttrInputType } from './enums';
export interface AttrConfiguration {
    title: string;
    type: AttrInputType;
    config?: AttrConfigurations;
}
export interface AttrConfigurations {
    [x: string]: AttrConfiguration;
}
export declare const attrs: AttrConfigurations;
