"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padding = exports.paddingRight = exports.paddingBottom = exports.paddingTop = exports.paddingLeft = void 0;
var enums_1 = require("./enums");
exports.paddingLeft = {
    title: '左内边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.paddingTop = {
    title: '上内边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.paddingBottom = {
    title: '下内边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.paddingRight = {
    title: '右内边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.padding = {
    title: '内边距',
    type: enums_1.StyleInputType.ARRAY,
    config: {
        paddingTop: exports.paddingTop, paddingRight: exports.paddingRight, paddingBottom: exports.paddingBottom, paddingLeft: exports.paddingLeft,
    },
};

//# sourceMappingURL=../sourcemaps/styles/padding.js.map
