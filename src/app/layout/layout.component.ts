import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../models/store.model';
import { StoreService } from '../services/store.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  selectedStoreName: string;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.selectedStoreName = this.storeService.selectedStoreName;
  }

}
