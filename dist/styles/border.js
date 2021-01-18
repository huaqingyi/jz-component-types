"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.border = exports.borderColor = exports.borderRight = exports.borderBottom = exports.borderTop = exports.borderLeft = void 0;
var enums_1 = require("./enums");
exports.borderLeft = {
    title: '左边框',
    type: enums_1.StyleInputType.INPUT,
};
exports.borderTop = {
    title: '上边框',
    type: enums_1.StyleInputType.INPUT,
};
exports.borderBottom = {
    title: '下边框',
    type: enums_1.StyleInputType.INPUT,
};
exports.borderRight = {
    title: '右边框',
    type: enums_1.StyleInputType.INPUT,
};
exports.borderColor = {
    title: '边框颜色',
    type: enums_1.StyleInputType.COLORPICKER,
};
exports.border = {
    title: '边框',
    type: enums_1.StyleInputType.ARRAY,
    config: {
        borderTop: exports.borderTop, borderRight: exports.borderRight, borderBottom: exports.borderBottom, borderLeft: exports.borderLeft, borderColor: exports.borderColor,
    },
};

//# sourceMappingURL=../sourcemaps/styles/border.js.map
