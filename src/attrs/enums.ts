export enum AttrInputType {
    // 输入框
    INPUT,
    // 选择器
    SELECT,
    // 上传文件
    UPLOAD,
    // 多个配置 如 border -> [boderleft,....]
    ARRAY,
    // box-shadow: [xxx,xxx,xxx]
    ATTRARRAY,
    // 取色器
    COLORPICKER,
    // boolean 选择
    SWITCH,
    // 宫格选择
    GRIDSELECT,
    // 循环
    NOOP,
}
