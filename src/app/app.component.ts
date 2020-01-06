import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Store } from './models/store.model';
import { StoreService } from './services/store.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'computer-vision-dashboard';
  isFetching: boolean = false;
  isLoggedIn: boolean = false;
  loadedStores: Store[];

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private storeService: StoreService) {
  }
  ngOnInit() {
    this.spinner.show();
    this.isFetching = true;
    this.authService.logInEvent.subscribe( bool => {
      this.isLoggedIn = bool;
      this.storeService.fetchStores()
        .subscribe(store => {
          this.isFetching = false;
          this.spinner.hide();
          this.loadedStores = store;
        })
    })
  }

}
