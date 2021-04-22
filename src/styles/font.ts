import { StyleInputType } from './enums';

export const fontWeight = {
    title: '加粗',
    type: StyleInputType.UPLOAD,
    value: 'bold',
    icon: 'iconbold',
};

export const fontStyle = {
    title: '斜体',
    type: StyleInputType.UPLOAD,
    value: 'italic',
    icon: 'iconitalic',
};

export const textDecoration = {
    title: '下滑线',
    type: StyleInputType.UPLOAD,
    value: 'underline',
    icon: 'iconunderline',
};

export const color = {
    title: '颜色',
    type: StyleInputType.COLORPICKER,
    value: 'iconfont-color',
};

export const fontSize = {
    title: '字体大小',
    type: StyleInputType.INPUT,
};

export const fontFamily = {
    title: '字体',
    type: StyleInputType.SELECT,
    multiple: true,
    // options: ['Times', 'TimesNR', 'New Century Schoolbook', 'Georgia', 'New York', 'serif'],
    value: ['Times', 'TimesNR', 'New Century Schoolbook', 'Georgia', 'New York', 'serif'],
    options: [
        { name: 'Times', data: 'Times', map: 'Times' },
        { name: 'TimesNR', data: 'TimesNR', map: 'TimesNR' },
        { name: 'Times', data: 'Times', map: 'Times' },
        { name: 'Times', data: 'Times', map: 'Times' },
        { name: 'Times', data: 'Times', map: 'Times' },
    ],
};

export const font = {
    title: '字体',
    type: StyleInputType.ARRAY,
    config: {
        fontStyle, fontWeight, textDecoration, color,
        fontFamily, fontSize,
    }
};
