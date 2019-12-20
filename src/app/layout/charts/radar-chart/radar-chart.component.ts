import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  public radarChartOptions: RadialChartOptions;
  public radarChartLabels: Label[];
  public radarChartData: ChartDataSets[];
  public radarChartType: ChartType;


  constructor() { }

  ngOnInit() {
    this.radarChartOptions= {
      responsive: true,
    };
    this.radarChartLabels = ['Entre 20 y 30 años', 'Entre 30 y 40 años', 'Más de 40 años',
      'Género Femenino', 'Género Másculino', 'Menos de 20 años'];
  
    this.radarChartData = [
      { data: [0, 1, 2, 3, 4, 5], label: 'Edad publico' }
    ];
    this.radarChartType = 'radar';
  }

}
