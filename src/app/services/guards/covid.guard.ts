import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import Swal from 'sweetalert2';

@Injectable()
export class CovidGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  canActivate() {

    if ( !this._userService.covid() ) {
        return true;
    } else {
        this.router.navigate(['/client/dashboard']);
        return false;
    }
  }
}
