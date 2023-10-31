import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023' ],
    datasets: [
      { data: [ 320, 200, 321, 203, 250, 400, 500,321,232,345,500,600 ], label: 'Average Students', backgroundColor: '#06A94D' },
      
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
}
