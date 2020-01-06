import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { StoreService } from 'src/app/services/store.service';
import { GeneralVisits } from 'src/app/models/generalVisits.model';
@Component({
  selector: 'app-segmentation',
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.css']
})
export class SegmentationComponent implements OnInit {

  isFetching: boolean = false;
  generalVisits: GeneralVisits;

  constructor(
    private spinner: NgxSpinnerService,
    private storeService: StoreService){
  }

  ngOnInit() {
    this.spinner.show();
    this.isFetching = true;
    this.storeService.fetchSpecificArea('general-visits')
    .subscribe( generalVisits => {
      this.isFetching = false;
      this.spinner.hide();
      this.generalVisits = generalVisits;
      console.log(this.generalVisits);
    })
  }

}
