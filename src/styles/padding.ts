import { StyleInputType } from "./enums";

export const paddingLeft = {
    title: '左内边距',
    type: StyleInputType.INPUT,
};

export const paddingTop = {
    title: '上内边距',
    type: StyleInputType.INPUT,
};

export const paddingBottom = {
    title: '下内边距',
    type: StyleInputType.INPUT,
};

export const paddingRight = {
    title: '右内边距',
    type: StyleInputType.INPUT,
};

export const padding = {
    title: '内边距',
    type: StyleInputType.ARRAY,
    config: {
        paddingTop, paddingRight, paddingBottom, paddingLeft,
    },
};
