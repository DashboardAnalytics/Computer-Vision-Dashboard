import { Component, OnInit, Input } from '@angular/core';
import { faBell, faComment, faUserCircle, faCalendarAlt, faFrown } from '@fortawesome/free-solid-svg-icons';
import { Stores } from 'src/app/models/stores.model';
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
  @Input() stores: Stores[];
  selectedStoreName: string = '';
  logoLocation: string;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.selectedStoreEvent.subscribe( storeName => {
      this.selectedStoreName = storeName;
      if (this.selectedStoreName === 'Jumbo') {
        this.logoLocation = '../../assets/images/logo_jumbo.png'
      }
      if (this.selectedStoreName === 'Santa Isabel') {
        this.logoLocation = '../../assets/images/logo_santa-isabel.png'
      }
      if (this.selectedStoreName === 'Easy') {
        this.logoLocation = '../../assets/images/logo_easy.png'
      }
      if (this.selectedStoreName === 'Paris') {
        this.logoLocation = '../../assets/images/logo_paris.png'
      }
      if (this.selectedStoreName === 'Johnson') {
        this.logoLocation = '../../assets/images/logo_johnson.png'
      }
    })
  }

  onSelectStore(storeName: string){
    this.storeService.setSelectedStore(storeName);
    this.selectedStoreName = storeName;
  }

}
