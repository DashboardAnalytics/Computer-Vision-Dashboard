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

  @Input() title: string;
  @Input() subtitle: string;
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
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: true
          }
        }]
      }
    };
    this.lineChartLegend = false;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
    if (this.selectedStoreName === 'Jumbo') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(75, 192, 192)',
          borderWidth: 2
        },
      ];
    }
    if (this.selectedStoreName === 'Santa Isabel') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2
        },
      ];
    }
    if (this.selectedStoreName === 'Easy') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgb(255, 205, 86)',
          borderWidth: 2
        },
      ];
    }
    if (this.selectedStoreName === 'Paris') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2
        },
      ];
    }
    if (this.selectedStoreName === 'Johnson') {
      this.lineChartColors = [
        {
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgb(255, 159, 64)',
          borderWidth: 2
        },
      ];
    }
  }

}



