import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import Swal from 'sweetalert2';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  canActivate() {

    if ( this._userService.inLog() ) {
      return true;
    }else {
      Swal.fire({
        title: '¡Espera!',
        html: `Inicia sesión antes`,
        icon: 'info',
        confirmButtonText: 'Aceptar'
      });
      this.router.navigate(['/client']);
      return false;
    }

  }

}
