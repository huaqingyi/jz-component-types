import { StyleInputType } from './enums';

export const fontSize = {
    title: '字体大小',
    type: StyleInputType.INPUT,
};

export const fontFamily = {
    title: '字体大小',
    type: StyleInputType.SELECT,
    multiple: true,
    store: ['Times', 'TimesNR', 'New Century Schoolbook', 'Georgia', 'New York', 'serif'],
};

export const font = {
    title: '内边距',
    type: StyleInputType.ARRAY,
    config: {
        fontSize, fontFamily, 
    }
};
