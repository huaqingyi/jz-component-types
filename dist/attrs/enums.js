"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttrInputType = void 0;
var AttrInputType;
(function (AttrInputType) {
    // 输入框
    AttrInputType[AttrInputType["INPUT"] = 0] = "INPUT";
    // 选择器
    AttrInputType[AttrInputType["SELECT"] = 1] = "SELECT";
    // 上传文件
    AttrInputType[AttrInputType["UPLOAD"] = 2] = "UPLOAD";
    // 多个配置 如 border -> [boderleft,....]
    AttrInputType[AttrInputType["ARRAY"] = 3] = "ARRAY";
    // box-shadow: [xxx,xxx,xxx]
    AttrInputType[AttrInputType["ATTRARRAY"] = 4] = "ATTRARRAY";
    // 取色器
    AttrInputType[AttrInputType["COLORPICKER"] = 5] = "COLORPICKER";
    // boolean 选择
    AttrInputType[AttrInputType["SWITCH"] = 6] = "SWITCH";
    // 宫格选择
    AttrInputType[AttrInputType["GRIDSELECT"] = 7] = "GRIDSELECT";
})(AttrInputType = exports.AttrInputType || (exports.AttrInputType = {}));

//# sourceMappingURL=../sourcemaps/attrs/enums.js.map
