"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textAlign = void 0;
var enums_1 = require("./enums");
exports.textAlign = {
    title: '文字对其',
    type: enums_1.StyleInputType.BUTTONSWITCH,
    buttons: [
        {
            title: '左对其',
            type: enums_1.StyleInputType.BUTTONSWITCH,
            value: 'left',
            icon: 'iconalign-left',
        },
        {
            title: '居中',
            type: enums_1.StyleInputType.BUTTONSWITCH,
            value: 'center',
            icon: 'iconalign-center',
        },
        {
            title: '右对其',
            type: enums_1.StyleInputType.BUTTONSWITCH,
            value: 'right',
            icon: 'iconalign-right',
        },
        {
            title: '两端对其',
            type: enums_1.StyleInputType.BUTTONSWITCH,
            value: 'justify',
            icon: 'iconalign-justify',
        },
    ]
};

//# sourceMappingURL=../sourcemaps/styles/textAlign.js.map
