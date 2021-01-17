import { StyleInputType } from "./enums";

export const borderLeft = {
    title: '左边框',
    type: StyleInputType.INPUT,
};

export const borderTop = {
    title: '上边框',
    type: StyleInputType.INPUT,
};

export const borderBottom = {
    title: '下边框',
    type: StyleInputType.INPUT,
};

export const borderRight = {
    title: '右边框',
    type: StyleInputType.INPUT,
};

export const borderColor = {
    title: '边框颜色',
    type: StyleInputType.COLORPICKER,
}

export const border = {
    title: '边框',
    type: StyleInputType.ARRAY,
    config: {
        borderTop, borderRight, borderBottom, borderLeft, borderColor,
    },
};
