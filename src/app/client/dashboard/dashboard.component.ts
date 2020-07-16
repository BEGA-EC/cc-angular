import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/service.index';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(public http: HttpClient, public _userService: UserService, public _loadingService: LoadingService) { 
    this.http.get(`${environment.endpoint}user/me`).subscribe((data: any) => {
      this.user = data.user;
    });
  }

  ngOnInit(): void {
  }

  

}