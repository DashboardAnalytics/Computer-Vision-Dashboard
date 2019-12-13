
import { Injectable, EventEmitter } from '@angular/core';
import { Store } from '../models/store.model';
@Injectable({providedIn: 'root'})
export class StoreService{
    selectedStore: string;
    selectedStoreEvent = new EventEmitter<string>();
    stores: Store[] = [
        { id: 1, name: 'Jumbo', url: 'jumbo', description: 'Some description' },
        { id: 2, name: 'Santa Isabel', url: 'santa-isabel', description: 'Some description' },
        { id: 3, name: 'Easy', url: 'easy', description: 'Some description' },
        { id: 4, name: 'Paris', url: 'paris', description: 'Some description' },
        { id: 5, name: 'Johnson', url: 'johnson', description: 'Some description' }
    ];


    setSelectedMall(mallName: string) {
        this.selectedStore = mallName;
        this.selectedStoreEvent.emit(mallName);
        console.log('The selected mall is: \'' + this.selectedStore + '\'');
      }
}