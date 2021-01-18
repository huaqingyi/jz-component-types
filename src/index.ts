import { StyleConfiguration } from './styles';
import { AttrConfiguration } from './attrs';
import { Event } from 'jz-configuration-types';

export interface EventConfiguration {
    [eventName: string]: Event;
}

export interface ComponentConfiguration {
    styles: StyleConfiguration;
    attrs: AttrConfiguration;
    events: EventConfiguration;
}

export * from 'jz-configuration-types';
export * from './attrs';
export * from './styles';
