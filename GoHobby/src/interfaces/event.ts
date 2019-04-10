import { User } from './user';

export interface Event {
    author : number,
    title : string,
    description : string,
    startDate : Date,
    repeats : boolean,
    members : User[]
}