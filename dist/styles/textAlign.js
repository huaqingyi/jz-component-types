"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textAlign = void 0;
var enums_1 = require("./enums");
exports.textAlign = {
    title: '文字对其',
    type: enums_1.StyleInputType.SELECT,
    options: [
        { name: '左对齐', data: 'left', map: 'left' },
        { name: '居中', data: 'center', map: 'center' },
        { name: '右对齐', data: 'right', map: 'right' },
        { name: '上下居中', data: 'justify', map: 'justify' },
    ],
};

//# sourceMappingURL=../sourcemaps/styles/textAlign.js.map
