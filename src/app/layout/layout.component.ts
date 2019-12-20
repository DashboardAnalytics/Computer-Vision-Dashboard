import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../models/store.model';
import { StoreService } from '../services/store.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';
import { SpecificSection } from '../models/specificSection.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  selectedStoreName: string;
  specificAnalysisResultsAreas: SpecificSection[];

  constructor(private storeService: StoreService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.selectedStoreName = this.storeService.selectedStoreName;
    this.specificAnalysisResultsAreas = this.storeService.specificAnalysisResultsAreas;
  }

}
