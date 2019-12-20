
import { Injectable, EventEmitter } from '@angular/core';
import { Stores } from '../models/stores.model';
import { SpecificSection } from '../models/specificSection.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Store } from '../models/store.model';
import { GeneralVisits } from '../models/generalVisits.model';

@Injectable({ providedIn: 'root' })
export class StoreService {

    selectedStoreName: string;
    selectedStoreEvent = new EventEmitter<string>();
    stores: Store[];
    generalVisits: GeneralVisits;

    specificAnalysisResultsAreas: SpecificSection[] = [
        { id: 1, name: 'Conversión', url: 'conversion' },
        { id: 2, name: 'Permanencia', url: 'permanencia' },
        { id: 3, name: 'Segmentación', url: 'segmentacion' },
        { id: 4, name: 'Satisfacción', url: 'satisfaccion' }
    ];

    constructor(private http: HttpClient) { }

    fetchStores() {
        return this.http
            .get<{ [key: string]: Store }>('https://computer-vision-dashboard.firebaseio.com/stores.json')
            .pipe(map(responseData => {
                const storesArray: Store[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        storesArray.push({ ...responseData[key] });
                    }
                }
                this.stores = storesArray;
                return storesArray;
            }));
    }

    fetchSpecificArea(areaName: string) {
        return this.http
            .get<{ [key: string]: GeneralVisits }>('https://computer-vision-dashboard.firebaseio.com/'+areaName+'.json')
            .pipe(map(responseData => {
                const generalVisits: GeneralVisits = { dates: [], visits: [] };
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        generalVisits.dates.push(responseData[key]['date']);
                        generalVisits.visits.push(+responseData[key]['visits']);

                    }
                }
                this.generalVisits = generalVisits;
                return generalVisits;
            }));
    }

    setSelectedStore(storeName: string) {
        this.selectedStoreName = storeName;
        this.selectedStoreEvent.emit(storeName);
        console.log('The selected store is: \'' + this.selectedStoreName + '\'');
    }

    setStores(stores: Store[]) {
        this.stores = stores;
    }
}