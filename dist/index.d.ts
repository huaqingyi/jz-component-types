import { StyleConfiguration } from './styles';
import { AttrConfiguration, AttrConfigurations } from './attrs';
import { Event } from 'jz-configuration-types';
export interface EventConfiguration {
    [eventName: string]: Event;
}
export interface ComponentConfiguration {
    styles: StyleConfiguration;
    attrs: AttrConfigurations;
    events: EventConfiguration;
    slots?: Array<{
        tag: string;
        attrs?: AttrConfigurations;
        content?: AttrConfiguration;
        noop?: boolean;
    }>;
}
export * from 'jz-configuration-types';
export * from './attrs';
export * from './styles';
