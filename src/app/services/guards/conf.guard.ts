import { Injectable, ɵConsole } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfGuard implements CanActivate {

    user: any;
    done: any;

  constructor(
    public _userService: UserService,
    public router: Router,
    public http: HttpClient
  ) { }
  canActivate() {
    this.http.get(`${environment.endpoint}user/me`).subscribe((data: any) => {
        this.user = data.user.name;
      });
      this.http.get(`${environment.endpoint}covid-poll/done`).subscribe((data: any) => {
        this.done = data.done;

      });
      console.log(this._userService.inForm())
      console.log(this._userService.covid())
    if ( this._userService.inForm() || this._userService.covid()) {
      return true;
    }else {
      this.router.navigate(['/client/medical']);
      return false;
    }

  }

}