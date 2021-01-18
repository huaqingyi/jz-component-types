"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.margin = exports.marginRight = exports.marginBottom = exports.marginTop = exports.marginLeft = void 0;
var enums_1 = require("./enums");
exports.marginLeft = {
    title: '左外边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.marginTop = {
    title: '上外边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.marginBottom = {
    title: '下外边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.marginRight = {
    title: '右外边距',
    type: enums_1.StyleInputType.INPUT,
};
exports.margin = {
    title: '外边距',
    type: enums_1.StyleInputType.ARRAY,
    config: {
        marginTop: exports.marginTop, marginRight: exports.marginRight, marginBottom: exports.marginBottom, marginLeft: exports.marginLeft,
    },
};

//# sourceMappingURL=../sourcemaps/styles/margin.js.map
