import { Component, OnInit } from '@angular/core';
import {  faUserCircle, faFrown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  faUserCircle = faUserCircle;
  faFrown = faFrown;
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }
  onLogIn(){
    this.authService.logIn();
  }

}
