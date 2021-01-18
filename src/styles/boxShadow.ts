import { StyleInputType } from './enums';

export const xBoxShadow = {
    title: 'X阴影大小',
    type: StyleInputType.INPUT,
};

export const yBoxShadow = {
    title: 'Y阴影大小',
    type: StyleInputType.INPUT,
};

export const sizeBoxShadow = {
    title: '阴影大小',
    type: StyleInputType.INPUT,
};

export const colorBoxShadow = {
    title: '阴影颜色',
    type: StyleInputType.INPUT,
};

export const boxShadow = {
    title: '阴影',
    type: StyleInputType.ATTRARRAY,
    attrs: [
        xBoxShadow, yBoxShadow, sizeBoxShadow, colorBoxShadow,
    ]
};
