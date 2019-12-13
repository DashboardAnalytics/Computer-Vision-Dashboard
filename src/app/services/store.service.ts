
import { Injectable, EventEmitter } from '@angular/core';
import { Store } from '../models/store.model';
@Injectable({providedIn: 'root'})
export class StoreService{

    selectedStoreName: string;
    selectedStoreEvent = new EventEmitter<string>();
    stores: Store[] = [
        { id: 1, name: 'Jumbo', url: 'jumbo', stores: [
            {id: 1, name: 'Jumbo Bilbao', url: 'bilbao', description: 'Some description'},
            {id: 2, name: 'Jumbo Kennedy', url: 'kennedy', description: 'Some description'},
            {id: 3, name: 'Jumbo La Reina', url: 'la-reina', description: 'Some description'},
            {id: 4, name: 'Jumbo Los Dominicos', url: 'los-dominicos', description: 'Some description'},
        ], description: 'Some description' },
        { id: 2, name: 'Santa Isabel', url: 'santa-isabel', stores: [
            {id: 1, name: 'Av. Las Torres 450, Local 1 Lo Campino,Quilicura', url: 'bilbao', description: 'Some description'},
            {id: 2, name: 'Av. Francisco Bilbao 2855, Providencia', url: 'kennedy', description: 'Some description'},
            {id: 3, name: 'Ambrosio O’higgins 1689, Curacaví', url: 'la-reina', description: 'Some description'},
            {id: 4, name: 'Av. Pajaritos 4909, Maipú', url: 'los-dominicos', description: 'Some description'},
        ], description: 'Some description' },
        { id: 3, name: 'Easy', url: 'easy', stores: [
            {id: 1, name: 'Easy Alto las condes', url: 'alto-las-condes', description: 'Some description'},
            {id: 2, name: 'Easy Cerrillos', url: 'cerrillos', description: 'Some description'},
            {id: 3, name: 'Easy Chicureo', url: 'chicureo', description: 'Some description'},
            {id: 4, name: 'Easy Costanera Center', url: 'Costanera Center', description: 'Some description'},
        ], description: 'Some description' },
        { id: 4, name: 'Paris', url: 'paris', stores: [
            {id: 1, name: 'Paris Alto las condes', url: 'alto-las-condes', description: 'Some description'},
            {id: 2, name: 'Paris Lyon', url: 'cerrillos', description: 'Some description'},
            {id: 3, name: 'Paris Florida', url: 'chicureo', description: 'Some description'},
            {id: 4, name: 'Paris Costanera Center', url: 'Costanera Center', description: 'Some description'},
        ], description: 'Some description' },
        { id: 5, name: 'Johnson', url: 'johnson', stores: [
            {id: 1, name: 'Johnson Melipilla', url: 'alto-las-condes', description: 'Some description'},
            {id: 2, name: 'Johnson Florida Center', url: 'cerrillos', description: 'Some description'},
            {id: 3, name: 'Johnson Puente Alto', url: 'chicureo', description: 'Some description'},
            {id: 4, name: 'Johnson Agustinas', url: 'Costanera Center', description: 'Some description'},
        ], description: 'Some description' }
    ];

    setSelectedStore(storeName: string) {
        this.selectedStoreName = storeName;
        this.selectedStoreEvent.emit(storeName);
        console.log('The selected store is: \'' + this.selectedStoreName + '\'');
      }
}