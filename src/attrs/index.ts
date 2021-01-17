import { AttrInputType } from './enums';

export interface AttrConfiguration {
    title: string;
    type: AttrInputType;
    config?: AttrConfigurations;
}

export interface AttrConfigurations {
    [x: string]: AttrConfiguration;
}

export const attrs: AttrConfigurations = {
    slot: {
        title: '请输入编辑内容',
        type: AttrInputType.SLOT,
    }
};
