import { Component, OnInit } from '@angular/core';
import { Store } from './models/store.model';
import { StoreService } from './services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'computer-vision-dashboard';
  stores: Store[];
  constructor(private storeService: StoreService){
  }
  ngOnInit(){
    this.stores = this.storeService.stores;
  }

}
