import { StyleInputType } from './enums';
import * as CSS from 'csstype';
import { border } from './border';
import { padding } from './padding';
import { margin } from './margin';
import { background } from './background';
import { font } from './font';
import { textAlign } from './textAlign';
import { boxShadow } from './boxShadow';

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
    // 标题
    title: string;
    // 输入类型
    type: StyleInputType;
    // 按钮 icon
    icon?: string;
    // 输入类型为 BUTTONSWITCH value 为按钮值
    value?: string;
    // 子表单
    config?: StyleConfigurations<CSSProperties>;
    // 输入类型为 SELECT 时 该字段控制多选
    multiple?: boolean;
    // 输入类型为 SELECT 时 的下拉选项值
    store?: string[];
    // 当类型为 BUTTONSWITCH 同一个样式有多个值时
    buttons?: StyleConfiguration[];
    attrs?: StyleConfiguration[];
}

export const styles: StyleConfigurations<CSSProperties> = {
    border, padding, margin, background, font, textAlign, boxShadow
};
