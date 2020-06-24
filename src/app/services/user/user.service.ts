import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: String;
  endpoint: String;
  password: string;
  code: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
  }

  inLog() {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse( localStorage.getItem('user') );
    } else {
      this.token = '';
      this.user = null;
    }
  }

  registerStorage(password: string, code: string) {
    localStorage.setItem('password', password );
    localStorage.setItem('code', code );
    this.password = localStorage.getItem('password');
    this.code = localStorage.getItem('code');
  }

  saveStorage(token: string, expireAt: string) {
    localStorage.setItem('token', token );
    localStorage.setItem('expireAt', expireAt );
    this.token = token;
  }

  logout() {
    this.token = '';
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

    login( user: User) {
    let url = `${environment.endpoint}user/login`;
    return this.http.post( url, user ).pipe(map( (resp: any) => {
      this.saveStorage( resp.token, resp.expiredAt);
      return true;
    }));
  }

  register(email: string) {
    return new Promise(resolve => {
      let url = `${environment.endpoint}user/register`
      return this.http.post(url, {email}).pipe(map( (resp: {code: string, password:string}) => {
        this.registerStorage(resp.password, resp.code);
      }))
      .subscribe((resp: any) => {
        this.password = localStorage.getItem('password');
        this.code = localStorage.getItem('code');
        Swal.fire({
          title: '¡Excelente!',
          html: `Tu contraseña es:<br><br><span>${this.password}</span><br><br>Tu código es:<br><br><span>${this.code}</span><br><br>¡Cópialos y guárdalos para no perderlos! Ahora podrás confirmar tu código, y luego iniciar sesión con esa contraseña.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['/client/code']);
         return resolve(true)
      });
    });
  }
}
