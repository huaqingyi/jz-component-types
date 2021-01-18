"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleInputType = void 0;
var StyleInputType;
(function (StyleInputType) {
    // 输入框
    StyleInputType[StyleInputType["INPUT"] = 0] = "INPUT";
    // 图片链接或上传图片
    StyleInputType[StyleInputType["INPUTUPLOAD"] = 1] = "INPUTUPLOAD";
    // 选择器
    StyleInputType[StyleInputType["SELECT"] = 2] = "SELECT";
    // 上传文件
    StyleInputType[StyleInputType["UPLOAD"] = 3] = "UPLOAD";
    // 多个配置 如 border -> [boderleft,....]
    StyleInputType[StyleInputType["ARRAY"] = 4] = "ARRAY";
    // box-shadow: [xxx,xxx,xxx]
    StyleInputType[StyleInputType["ATTRARRAY"] = 5] = "ATTRARRAY";
    // 取色器
    StyleInputType[StyleInputType["COLORPICKER"] = 6] = "COLORPICKER";
    // boolean 选择
    StyleInputType[StyleInputType["SWITCH"] = 7] = "SWITCH";
    // 类似于 word 的样式按钮
    StyleInputType[StyleInputType["BUTTONSWITCH"] = 8] = "BUTTONSWITCH";
    StyleInputType[StyleInputType["SILDER"] = 9] = "SILDER";
})(StyleInputType = exports.StyleInputType || (exports.StyleInputType = {}));

//# sourceMappingURL=../sourcemaps/styles/enums.js.map
