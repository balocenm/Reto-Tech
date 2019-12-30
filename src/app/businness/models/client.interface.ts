export interface IClient {
    id?: string;
    name: string;
    lastName: string;
    age: number;
    date: string;
}

export interface IClientDead {
    id?: string;
    name: string;
    lastName: string;
    age: number;
    date: string;
    dead: string;
}

export class Config {
    minDate: string;
    maxDate: string;
}