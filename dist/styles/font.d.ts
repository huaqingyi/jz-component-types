import { StyleInputType } from './enums';
export declare const fontWeight: {
    title: string;
    type: StyleInputType;
    value: string;
    icon: string;
};
export declare const fontStyle: {
    title: string;
    type: StyleInputType;
    value: string;
    icon: string;
};
export declare const textDecoration: {
    title: string;
    type: StyleInputType;
    value: string;
    icon: string;
};
export declare const color: {
    title: string;
    type: StyleInputType;
    value: string;
};
export declare const fontSize: {
    title: string;
    type: StyleInputType;
};
export declare const fontFamily: {
    title: string;
    type: StyleInputType;
    multiple: boolean;
    value: string[];
    options: {
        name: string;
        data: string;
        map: string;
    }[];
};
export declare const font: {
    title: string;
    type: StyleInputType;
    config: {
        fontStyle: {
            title: string;
            type: StyleInputType;
            value: string;
            icon: string;
        };
        fontWeight: {
            title: string;
            type: StyleInputType;
            value: string;
            icon: string;
        };
        textDecoration: {
            title: string;
            type: StyleInputType;
            value: string;
            icon: string;
        };
        color: {
            title: string;
            type: StyleInputType;
            value: string;
        };
        fontFamily: {
            title: string;
            type: StyleInputType;
            multiple: boolean;
            value: string[];
            options: {
                name: string;
                data: string;
                map: string;
            }[];
        };
        fontSize: {
            title: string;
            type: StyleInputType;
        };
    };
};
