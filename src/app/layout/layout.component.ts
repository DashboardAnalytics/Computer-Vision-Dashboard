import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../services/store.service';
import { SpecificSection } from '../models/specificSection.model';
import { NgxSpinnerService } from "ngx-spinner";
import { GeneralVisits } from '../models/generalVisits.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isFetchingGeneralVisits: boolean = false;
  isFetchingWeekVisits: boolean = false;
  isFetchingDayVisits: boolean = false;
  isFetchingHourVisits: boolean = false;

  selectedStoreName: string;
  specificAnalysisResultsAreas: SpecificSection[];
  allowShowCharts: number
  
  generalVisits: GeneralVisits;
  weekVisits: GeneralVisits;
  dayVisits: GeneralVisits;
  hourVisits: GeneralVisits;

  constructor(
    private spinner: NgxSpinnerService,
    private storeService: StoreService){
  }

  ngOnInit() {
    this.spinner.show();
    
    this.isFetchingGeneralVisits = true;
    this.isFetchingWeekVisits = true;
    this.isFetchingDayVisits = true;
    this.isFetchingHourVisits = true;

    this.selectedStoreName = this.storeService.selectedStoreName;
    this.specificAnalysisResultsAreas = this.storeService.specificAnalysisResultsAreas;
    this.storeService.fetchSpecificArea('general-visits').subscribe( generalVisits => {
      this.generalVisits = generalVisits;
      this.isFetchingGeneralVisits = false;
      this.spinner.hide();
    })
    this.storeService.fetchSpecificArea('week-visits').subscribe( weekVisits => {
      this.weekVisits = weekVisits;
      this.isFetchingWeekVisits = false;
      this.spinner.hide();
    })
    this.storeService.fetchSpecificArea('day-visits').subscribe( dayVisits => {
      this.dayVisits = dayVisits;
      this.isFetchingDayVisits = false;
      this.spinner.hide();
    })
    this.storeService.fetchSpecificArea('hour-visits').subscribe( hourVisits => {
      this.hourVisits = hourVisits;
      this.isFetchingHourVisits = false;
      this.spinner.hide();
    })
  }

}
