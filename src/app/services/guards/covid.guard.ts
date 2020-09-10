import { Injectable, ɵConsole } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CovidGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    public router: Router,
    public http: HttpClient
  ) { }
  canActivate() {

    if (this._userService.inCovid()) {
        return true;
    } else {
      this.router.navigate(['/client/covid']);
      return false;
    }
  }
}