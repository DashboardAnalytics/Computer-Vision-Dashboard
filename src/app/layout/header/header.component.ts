import { Component, OnInit, Input } from '@angular/core';
import { faBell, faComment, faUserCircle, faCalendarAlt, faFrown } from '@fortawesome/free-solid-svg-icons';
import { Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  faComment = faComment;
  faUserCircle = faUserCircle;
  faCalendarAlt = faCalendarAlt;
  faFrown = faFrown;
  stores: Store[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.stores = this.storeService.stores;
  }

  onSelectStore(storeName: string){
    this.storeService.setSelectedStore(storeName);
  }

}
