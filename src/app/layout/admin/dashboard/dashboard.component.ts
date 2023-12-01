import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Subscription } from 'rxjs';
import { adminData } from 'src/app/model/adminData.model';
import { AdminDataService } from 'src/app/services/admin-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  totalUsers !: adminData
  totalUsersSubscription !: Subscription

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
  
  constructor(private adminDataService: AdminDataService){}

  ngOnInit(): void {
    this.adminDataService.getAdminData()
    this.totalUsersSubscription = this.adminDataService.adminDatas.subscribe(data => {
      this.totalUsers = data
    })
  }

  ngOnDestroy(): void {
    this.totalUsersSubscription.unsubscribe()
  }

}
