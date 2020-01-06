import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { LineChartComponent } from './layout/charts/line-chart/line-chart.component';
import { BarChartComponent } from './layout/charts/bar-chart/bar-chart.component';
import { TopKComponent } from './layout/top-k/top-k.component';
import { DoughnutChartComponent } from './layout/charts/doughnut-chart/doughnut-chart.component';
import { ConversionComponent } from './layout/conversion/conversion.component';
import { PermanenceComponent } from './layout/permanence/permanence.component';
import { SegmentationComponent } from './layout/segmentation/segmentation.component';
import { SatisfactionComponent } from './layout/satisfaction/satisfaction.component';
import { RadarChartComponent } from './layout/charts/radar-chart/radar-chart.component';
import { BubbleChartComponent } from './layout/charts/bubble-chart/bubble-chart.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './layout/home/home.component';
const appRoute: Routes = [
  {
    path: 'jumbo', component: LayoutComponent, children: [
      { path: 'conversion', component: ConversionComponent },
      { path: 'permanencia', component: PermanenceComponent },
      { path: 'segmentacion', component: SegmentationComponent },
      { path: 'satisfaccion', component: SatisfactionComponent }
    ]
  },
  {
    path: 'santa-isabel', component: LayoutComponent, children: [
      { path: 'conversion', component: ConversionComponent },
      { path: 'permanencia', component: PermanenceComponent },
      { path: 'segmentacion', component: SegmentationComponent },
      { path: 'satisfaccion', component: SatisfactionComponent }
    ]
  },
  {
    path: 'easy', component: LayoutComponent, children: [
      { path: 'conversion', component: ConversionComponent },
      { path: 'permanencia', component: PermanenceComponent },
      { path: 'segmentacion', component: SegmentationComponent },
      { path: 'satisfaccion', component: SatisfactionComponent }
    ]
  },
  {
    path: 'paris', component: LayoutComponent, children: [
      { path: 'conversion', component: ConversionComponent },
      { path: 'permanencia', component: PermanenceComponent },
      { path: 'segmentacion', component: SegmentationComponent },
      { path: 'satisfaccion', component: SatisfactionComponent }
    ]
  },
  {
    path: 'johnson', component: LayoutComponent, children: [
      { path: 'conversion', component: ConversionComponent },
      { path: 'permanencia', component: PermanenceComponent },
      { path: 'segmentacion', component: SegmentationComponent },
      { path: 'satisfaccion', component: SatisfactionComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LineChartComponent,
    BarChartComponent,
    TopKComponent,
    DoughnutChartComponent,
    ConversionComponent,
    ConversionComponent,
    PermanenceComponent,
    SegmentationComponent,
    SatisfactionComponent,
    RadarChartComponent,
    BubbleChartComponent,
    AuthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
