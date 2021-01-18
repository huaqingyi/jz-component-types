import { StyleInputType } from './enums';

export const textAlign = {
    title: '文字对其',
    type: StyleInputType.BUTTONSWITCH,
    buttons: [
        {
            title: '左对其',
            type: StyleInputType.BUTTONSWITCH,
            value: 'left',
            icon: 'iconalign-left',
        },
        {
            title: '居中',
            type: StyleInputType.BUTTONSWITCH,
            value: 'center',
            icon: 'iconalign-center',
        },
        {
            title: '右对其',
            type: StyleInputType.BUTTONSWITCH,
            value: 'right',
            icon: 'iconalign-right',
        },
        {
            title: '两端对其',
            type: StyleInputType.BUTTONSWITCH,
            value: 'justify',
            icon: 'iconalign-justify',
        },
    ]
};
