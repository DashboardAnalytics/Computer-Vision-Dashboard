import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() title: string;
  selectedStoreName: string;
  barChartOptions: ChartOptions;
  barChartLabels: Label[];
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins;
  barChartData: ChartDataSets[];
  
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.selectedStoreName = this.storeService.selectedStoreName;
    this.barChartOptions = {
      responsive: true,
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

    this.barChartLabels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartPlugins = [];
      this.barChartData = [
        {
          label: this.selectedStoreName,
          data: [45, 37, 60, 70, 46, 65, 80],
          fill: false,
          backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
          hoverBackgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
          borderColor: ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
          hoverBorderColor: ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
          borderWidth: 1




          
        },
      ];
   
  }

}
