import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  selectedStoreName: string;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.selectedStoreName = this.storeService.selectedStoreName;
    this.barChartOptions = {
      responsive: true,
    };

    this.barChartLabels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartPlugins = [];
    if (this.selectedStoreName === 'Jumbo') {
      this.barChartData = [
        {
          label: this.selectedStoreName,
          backgroundColor: 'rgb(30, 160, 46, 0.6)',
          data: [45, 37, 60, 70, 46, 65, 80],
        },
      ];
    }
    if (this.selectedStoreName === 'Santa Isabel') {
      this.barChartData = [
        {
          data: [45, 37, 60, 70, 46, 65, 80],
          label: this.selectedStoreName,
          backgroundColor: "rgb(226, 4, 17, 0.6)"
        },
      ];
    }
    if (this.selectedStoreName === 'Easy') {
      this.barChartData = [
        {
          data: [45, 37, 60, 70, 46, 65, 80],
          label: this.selectedStoreName,
          backgroundColor: "rgb(255, 239, 0, 0.6)"
        },
      ];
    }
    if (this.selectedStoreName === 'Paris') {
      this.barChartData = [
        {
          data: [45, 37, 60, 70, 46, 65, 80],
          label: this.selectedStoreName,
          backgroundColor: "rgb(1, 176, 235, 0.6)"
        },
      ];
    }
    if (this.selectedStoreName === 'Johnson') {
      this.barChartData = [
        {
          data: [45, 37, 60, 70, 46, 65, 80],
          label: this.selectedStoreName,
          backgroundColor: "rgb(248, 127, 16, 0.6)"
        },
      ];
    }
  }

  barChartOptions: ChartOptions;
  barChartLabels: Label[];
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins;
  barChartData: ChartDataSets[];

}
