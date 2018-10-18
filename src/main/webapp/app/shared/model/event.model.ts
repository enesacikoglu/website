import { Moment } from 'moment';

export interface IEvent {
    id?: number;
    title?: string;
    text?: string;
    location?: string;
    date?: Moment;
}

export class Event implements IEvent {
    constructor(public id?: number, public title?: string, public text?: string, public location?: string, public date?: Moment) {}
}
