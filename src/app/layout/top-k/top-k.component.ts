import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';
import { Stores } from 'src/app/models/stores.model';

@Component({
  selector: 'app-top-k',
  templateUrl: './top-k.component.html',
  styleUrls: ['./top-k.component.css']
})
export class TopKComponent implements OnInit, OnDestroy{
  
  faDownload = faDownload;
  selectedStoreName: string;
  stores: Stores[];
  storeSubscription: Subscription;

  @Input() title: string;
  
  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.selectedStoreName = this.storeService.selectedStoreName;
    this.storeService.stores.forEach(element => {
      if (element['name'] === this.selectedStoreName) {
        this.stores = element['stores'];
      }
    });
  }
  
  ngOnDestroy(){
    
  }

}
