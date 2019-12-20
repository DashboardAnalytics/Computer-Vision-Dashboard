
import { Injectable, EventEmitter } from '@angular/core';
import { Store } from '../models/store.model';
import { SpecificSection } from '../models/specificSection.model';
@Injectable({ providedIn: 'root' })
export class StoreService {

    selectedStoreName: string;
    selectedStoreEvent = new EventEmitter<string>();
    stores: Store[] = [
        {
            id: 1, name: 'Jumbo', url: 'jumbo', stores: [
                { id: 1, name: 'Jumbo Bilbao', url: 'bilbao', description: 'Some description' },
                { id: 2, name: 'Jumbo Kennedy', url: 'kennedy', description: 'Some description' },
                { id: 3, name: 'Jumbo La Reina', url: 'la-reina', description: 'Some description' },
                { id: 4, name: 'Jumbo Los Dominicos', url: 'los-dominicos', description: 'Some description' },
                { id: 5, name: 'Jumbo Costanera Center', url: 'costanera-center', description: 'Some description' },
                { id: 6, name: 'Jumbo La Dehesa', url: 'la-dehesa', description: 'Some description' },
                { id: 7, name: 'Jumbo Los Trapenses', url: 'los-trapenses', description: 'Some description' },
            ], description: 'Some description'
        },
        {
            id: 2, name: 'Santa Isabel', url: 'santa-isabel', stores: [
                { id: 1, name: 'Av. Las Torres 450, Local 1 Lo Campino,Quilicura', url: 'qulicura', description: 'Some description' },
                { id: 2, name: 'Av. Francisco Bilbao 2855, Providencia', url: 'providencia', description: 'Some description' },
                { id: 3, name: 'Ambrosio O’higgins 1689, Curacaví', url: 'curacavi', description: 'Some description' },
                { id: 4, name: 'Av. Pajaritos 4909, Maipú', url: 'maipu', description: 'Some description' },
                { id: 5, name: 'Salvador Gutierrez 5496, Quinta Normal', url: 'quinta-normal', description: 'Some description' },
                { id: 6, name: 'Av. Vicuña Mackenna 2005, Peñaflor', url: 'peñaflor', description: 'Some description' },
                { id: 7, name: 'El Gabino 13551 Lo Barnechea', url: 'lo-barnechea', description: 'Some description' },
            ], description: 'Some description'
        },
        {
            id: 3, name: 'Easy', url: 'easy', stores: [
                { id: 1, name: 'Easy Alto las condes', url: 'alto-las-condes', description: 'Some description' },
                { id: 2, name: 'Easy Cerrillos', url: 'cerrillos', description: 'Some description' },
                { id: 3, name: 'Easy Chicureo', url: 'chicureo', description: 'Some description' },
                { id: 4, name: 'Easy Costanera Center', url: 'Costanera Center', description: 'Some description' },
                { id: 5, name: 'Easy El llano', url: 'el-llano', description: 'Some description' },
                { id: 6, name: 'Easy La Dehesa', url: 'la-dehesa', description: 'Some description' },
                { id: 7, name: 'Easy La Florida', url: 'la-florida', description: 'Some description' },
            ], description: 'Some description'
        },
        {
            id: 4, name: 'Paris', url: 'paris', stores: [
                { id: 1, name: 'Paris Alto las condes', url: 'alto-las-condes', description: 'Some description' },
                { id: 2, name: 'Paris La Dehesa', url: 'la-dehesa', description: 'Some description' },
                { id: 3, name: 'Paris Parque Arauco', url: 'parque-arauco', description: 'Some description' },
                { id: 4, name: 'Paris Costanera Center', url: 'Costanera Center', description: 'Some description' },
                { id: 5, name: 'Paris Lyon', url: 'lyon', description: 'Some description' },
                { id: 6, name: 'Paris Quilín', url: 'quilin', description: 'Some description' },
                { id: 7, name: 'Paris Ñuñoa', url: 'nuñoa', description: 'Some description' },
            ], description: 'Some description'
        },
        {
            id: 5, name: 'Johnson', url: 'johnson', stores: [
                { id: 1, name: 'Johnson Panorámico', url: 'panoramico', description: 'Some description' },
                { id: 2, name: 'Johnson Agustinas', url: 'agustinas', description: 'Some description' },
                { id: 3, name: 'Johnson Melipilla', url: 'melipilla', description: 'Some description' },
                { id: 4, name: 'Johnson Agustinas', url: 'agustinas', description: 'Some description' },
                { id: 5, name: 'Johnson Maipú Plaza', url: 'maipu-plaza', description: 'Some description' },
                { id: 6, name: 'Johnson Mega Maipú', url: 'mega-maipu', description: 'Some description' },
                { id: 7, name: 'Johnson Mega Plaza Alameda', url: 'mega-plaza-alameda', description: 'Some description' },
            ], description: 'Some description'
        }
    ];
    specificAnalysisResultsAreas: SpecificSection[] =
        [
            { id: 1, name: 'Conversión', url: 'conversion' },
            { id: 2, name: 'Permanencia', url: 'permanencia' },
            { id: 3, name: 'Segmentación', url: 'segmentacion' },
            { id: 4, name: 'Satisfacción', url: 'satisfaccion' },
        ];

    setSelectedStore(storeName: string) {
        this.selectedStoreName = storeName;
        this.selectedStoreEvent.emit(storeName);
        console.log('The selected store is: \'' + this.selectedStoreName + '\'');
    }
}