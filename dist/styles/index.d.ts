import { StyleInputType } from './enums';
import * as CSS from 'csstype';
export interface CSSProperties extends CSS.Properties<string | number> {
}
export declare type StyleConfigurations<CSS> = {
    [P in keyof CSS]: StyleConfiguration;
};
export interface StyleConfiguration {
    title: string;
    type: StyleInputType;
    icon?: string;
    value?: string;
    config?: StyleConfigurations<CSSProperties>;
    multiple?: boolean;
    store?: string[];
    buttons?: StyleConfiguration[];
    attrs?: StyleConfiguration[];
}
export declare const styles: StyleConfigurations<CSSProperties>;
