import { StyleInputType } from "./enums";

export const marginLeft = {
    title: '左外边距',
    type: StyleInputType.INPUT,
};

export const marginTop = {
    title: '上外边距',
    type: StyleInputType.INPUT,
};

export const marginBottom = {
    title: '下外边距',
    type: StyleInputType.INPUT,
};

export const marginRight = {
    title: '右外边距',
    type: StyleInputType.INPUT,
};

export const margin = {
    title: '外边距',
    type: StyleInputType.ARRAY,
    config: {
        marginTop, marginRight, marginBottom, marginLeft,
    },
};
