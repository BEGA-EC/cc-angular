import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(public http: HttpClient) { 
    this.http.get(`${environment.endpoint}user/me`).subscribe((data: any) => {
      this.user = data.user;
    });
  }

  ngOnInit(): void {
  }

  

}