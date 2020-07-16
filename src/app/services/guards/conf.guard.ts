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

    if ( !this._userService.inLog() ) {
        return true;
    } else {
      this.router.navigate(['/client/dashboard']);
      return false;
    }
  }
}