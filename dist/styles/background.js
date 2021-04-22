"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.background = exports.backgroundImage = exports.backgroundColor = void 0;
var enums_1 = require("./enums");
exports.backgroundColor = {
    title: '背景色',
    type: enums_1.StyleInputType.INPUT,
};
exports.backgroundImage = {
    title: '背景图片',
    type: enums_1.StyleInputType.UPLOAD,
};
exports.background = {
    title: '背景',
    type: enums_1.StyleInputType.ARRAY,
    config: {
        backgroundColor: exports.backgroundColor, backgroundImage: exports.backgroundImage,
    },
};

//# sourceMappingURL=../sourcemaps/styles/background.js.map
