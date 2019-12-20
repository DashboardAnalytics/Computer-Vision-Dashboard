import { Stores } from './stores.model';

export class Store{
    public id: number;
    public name: string;
    public url: string;
    public stores: Stores[];
    public description: string;

    constructor(id: number, name: string, url: string, stores: Stores[], description: string) { 
        this.id = id;
        this.name = name;
        this.url = url;
        this.stores = stores;
        this.description = description;
    }
}