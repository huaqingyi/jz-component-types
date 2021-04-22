"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleInputType = void 0;
var StyleInputType;
(function (StyleInputType) {
    // 输入框
    StyleInputType[StyleInputType["INPUT"] = 0] = "INPUT";
    // 选择器
    StyleInputType[StyleInputType["SELECT"] = 1] = "SELECT";
    // 上传文件
    StyleInputType[StyleInputType["UPLOAD"] = 2] = "UPLOAD";
    // 多个配置 如 border -> [boderleft,....]
    StyleInputType[StyleInputType["ARRAY"] = 3] = "ARRAY";
    // box-shadow: [xxx,xxx,xxx]
    StyleInputType[StyleInputType["ATTRARRAY"] = 4] = "ATTRARRAY";
    // 取色器
    StyleInputType[StyleInputType["COLORPICKER"] = 5] = "COLORPICKER";
    // boolean 选择
    StyleInputType[StyleInputType["SWITCH"] = 6] = "SWITCH";
    // 宫格选择
    StyleInputType[StyleInputType["GRIDSELECT"] = 7] = "GRIDSELECT";
})(StyleInputType = exports.StyleInputType || (exports.StyleInputType = {}));

//# sourceMappingURL=../sourcemaps/styles/enums.js.map
