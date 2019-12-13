import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../models/store.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  @Input() stores: Store[];

  constructor() { }

  ngOnInit() {
  }

}
