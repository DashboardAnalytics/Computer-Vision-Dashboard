import { Component, OnInit, Input } from '@angular/core';
import { faBell, faComment, faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Store } from 'src/app/models/store.model';
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

  @Input() stores: Store[];

  constructor() { }

  ngOnInit() {
  }

}
