import { Component, OnInit } from '@angular/core';
import { faBell, faComment, faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
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
  constructor() { }

  ngOnInit() {
  }

}
