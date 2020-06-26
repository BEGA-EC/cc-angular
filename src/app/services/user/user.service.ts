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
      return this.http.post(url, {email}).pipe(map( (resp) => {
      })).subscribe( async _resp => {
        await Swal.fire({
          title: '¡Excelente!',
          html: `Hemos enviado un email de confirmación. Revisa tu corrreo electrónico.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        return resolve(true);
      }, err => {
        console.log(err.error.description == "Email already in use");
        if ( err.status == 400) {
          Swal.fire({
            title: 'Oh no',
            html: `El correo que ingresaste, ya se encuentra en uso.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
         }
        else {
          Swal.fire({
            title: 'Vaya...',
            html: `El servidor no ha recibido los datos. ¿Puedes intentarlo de nuevo? ¡Notifica el error si se repite!<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }  
      });
    });
  }
}
