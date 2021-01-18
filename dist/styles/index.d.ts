import { StyleInputType } from './enums';
import * as CSS from 'csstype';
export interface CSSProperties extends CSS.Properties<string | number> {
}
export declare type StyleConfigurations<CSS> = {
    [P in keyof CSS]: StyleConfig;
};
export interface StyleConfig {
    title: string;
    type: StyleInputType;
    icon?: string;
    value?: string;
    config?: StyleConfigurations<CSSProperties>;
    multiple?: boolean;
    store?: string[];
    buttons?: StyleConfig[];
    attrs?: StyleConfig[];
}
export interface StyleConfiguration extends StyleConfigurations<CSSProperties> {
}
export declare const styles: StyleConfigurations<CSSProperties>;
