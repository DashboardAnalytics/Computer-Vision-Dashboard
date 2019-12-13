import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  selectedStoreName: string;

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  lineChartOptions;

  lineChartColors: Color[];

  lineChartLegend;
  lineChartPlugins;
  lineChartType;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.selectedStoreName = this.storeService.selectedStoreName;
    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75], label: this.selectedStoreName },
    ];
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };
    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
    if (this.selectedStoreName === 'Jumbo') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgb(30, 160, 46, 0.6)',
        },
      ];
    }
    if (this.selectedStoreName === 'Santa Isabel') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgb(226, 4, 17, 0.6)',
        },
      ];
    }
    if (this.selectedStoreName === 'Easy') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgb(255, 239, 0, 0.6)',
        },
      ];
    }
    if (this.selectedStoreName === 'Paris') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgb(1, 176, 235, 0.6)',
        },
      ];
    }
    if (this.selectedStoreName === 'Johnson') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgb(248, 127, 16, 0.6)',
        },
      ];
    }
  }

}



