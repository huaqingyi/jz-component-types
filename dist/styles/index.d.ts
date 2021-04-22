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
    value?: any;
    config?: StyleConfigurations<CSSProperties>;
    multiple?: boolean;
    options?: Array<{
        name?: string;
        data: any;
        map: any;
    }>;
    attrs?: StyleConfig[];
}
export interface StyleConfiguration extends StyleConfigurations<CSSProperties> {
}
export declare const styles: StyleConfigurations<CSSProperties>;
