import { StyleInputType } from './enums';

export const backgroundColor = {
    title: '背景色',
    type: StyleInputType.INPUT,
};

export const backgroundImage = {
    title: '背景图片',
    type: StyleInputType.INPUTUPLOAD,
};

export const background = {
    title: '背景',
    type: StyleInputType.ARRAY,
    config: {
        backgroundColor, backgroundImage,
    },
};
