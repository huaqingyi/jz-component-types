import { StyleConfiguration } from './styles';
import { AttrConfigurations } from './attrs';
import { Event } from 'jz-configuration-types';
export interface EventConfiguration {
    [eventName: string]: Event;
}
export interface ComponentConfiguration {
    styles: StyleConfiguration;
    attrs: AttrConfigurations;
    events: EventConfiguration;
    slots?: string | string[];
}
export * from 'jz-configuration-types';
export * from './attrs';
export * from './styles';
