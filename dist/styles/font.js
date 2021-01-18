"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.font = exports.fontFamily = exports.fontSize = exports.color = exports.textDecoration = exports.fontStyle = exports.fontWeight = void 0;
var enums_1 = require("./enums");
exports.fontWeight = {
    title: '加粗',
    type: enums_1.StyleInputType.BUTTONSWITCH,
    value: 'bold',
    icon: 'iconbold',
};
exports.fontStyle = {
    title: '斜体',
    type: enums_1.StyleInputType.BUTTONSWITCH,
    value: 'italic',
    icon: 'iconitalic',
};
exports.textDecoration = {
    title: '下滑线',
    type: enums_1.StyleInputType.BUTTONSWITCH,
    value: 'underline',
    icon: 'iconunderline',
};
exports.color = {
    title: '颜色',
    type: enums_1.StyleInputType.COLORPICKER,
    value: 'iconfont-color',
};
exports.fontSize = {
    title: '字体大小',
    type: enums_1.StyleInputType.INPUT,
};
exports.fontFamily = {
    title: '字体',
    type: enums_1.StyleInputType.SELECT,
    multiple: true,
    store: ['Times', 'TimesNR', 'New Century Schoolbook', 'Georgia', 'New York', 'serif'],
};
exports.font = {
    title: '字体',
    type: enums_1.StyleInputType.ARRAY,
    config: {
        fontStyle: exports.fontStyle, fontWeight: exports.fontWeight, textDecoration: exports.textDecoration, color: exports.color,
        fontFamily: exports.fontFamily, fontSize: exports.fontSize,
    }
};

//# sourceMappingURL=../sourcemaps/styles/font.js.map
