import { StyleInputType } from './enums';

export const textAlign = {
    title: '文字对其',
    type: StyleInputType.SELECT,
    options: [
        { name: '左对齐', data: 'left', map: 'left' },
        { name: '居中', data: 'center', map: 'center' },
        { name: '右对齐', data: 'right', map: 'right' },
        { name: '上下居中', data: 'justify', map: 'justify' },
    ],
};
