import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { LineChartComponent } from './layout/charts/line-chart/line-chart.component';
import { BarChartComponent } from './layout/charts/bar-chart/bar-chart.component';
import { TopKComponent } from './layout/top-k/top-k.component';


const appRoute: Routes = [
  { path: 'jumbo', component: LayoutComponent },
  { path: 'santa-isabel', component: LayoutComponent },
  { path: 'easy', component: LayoutComponent },
  { path: 'paris', component: LayoutComponent },
  { path: 'johnson', component: LayoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LineChartComponent,
    BarChartComponent,
    TopKComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ChartsModule,
    RouterModule.forRoot(appRoute) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
