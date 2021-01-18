"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxShadow = exports.colorBoxShadow = exports.sizeBoxShadow = exports.yBoxShadow = exports.xBoxShadow = void 0;
var enums_1 = require("./enums");
exports.xBoxShadow = {
    title: 'X阴影大小',
    type: enums_1.StyleInputType.INPUT,
};
exports.yBoxShadow = {
    title: 'Y阴影大小',
    type: enums_1.StyleInputType.INPUT,
};
exports.sizeBoxShadow = {
    title: '阴影大小',
    type: enums_1.StyleInputType.INPUT,
};
exports.colorBoxShadow = {
    title: '阴影颜色',
    type: enums_1.StyleInputType.INPUT,
};
exports.boxShadow = {
    title: '阴影',
    type: enums_1.StyleInputType.ATTRARRAY,
    attrs: [
        exports.xBoxShadow, exports.yBoxShadow, exports.sizeBoxShadow, exports.colorBoxShadow,
    ]
};

//# sourceMappingURL=../sourcemaps/styles/boxShadow.js.map
