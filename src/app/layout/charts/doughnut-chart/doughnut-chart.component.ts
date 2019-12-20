import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @Input() title: string;
  doughnutChartLabels: Label[];
  doughnutChartData: MultiDataSet;
  doughnutChartType: ChartType;
  doughnutChartOptions: ChartOptions;
  constructor() { }

  ngOnInit() {
    this.doughnutChartLabels = ['Fuga','Conversión',];
    this.doughnutChartData = [
      [80, 20]
    ];
    this.doughnutChartType = 'doughnut';
    this.doughnutChartOptions = {
      title: {
        display: true,
        text: 'Tasa de conversión y fuga'
      }
    }
  }

}
