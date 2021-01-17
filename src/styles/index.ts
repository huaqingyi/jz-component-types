import { StyleInputType } from './enums';
import * as CSS from 'csstype';
import { border } from './border';
import { padding } from './padding';
import { margin } from './margin';
import { background } from './background';
import { font } from './font';

export interface CSSProperties extends CSS.Properties<string | number> {
    /**
     * The index signature was removed to enable closed typing for style
     * using CSSType. You're able to use type assertion or module augmentation
     * to add properties or an index signature of your own.
     *
     * For examples and more information, visit:
     * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
     */
}

export type StyleConfigurations<CSS> = {
    [P in keyof CSS]: StyleConfiguration;
}

export interface StyleConfiguration {
    title: string;
    type: StyleInputType;
    config?: StyleConfigurations<CSSProperties>;
    multiple?: boolean;
    store?: string[];
}

export const styles: StyleConfigurations<CSSProperties> = {
    border, padding, margin, background, font,
};
