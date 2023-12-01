import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { adminData } from '../model/adminData.model';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  adminDatas = new Subject<adminData>()
  constructor(private http: HttpClient) { }

  getAdminData(){
    this.http.get<{message: string, adminData: adminData}>('http://localhost:3000/api/admin/data')
      .subscribe(response => {
       this.adminDatas.next(response.adminData)
      })
  }
}
