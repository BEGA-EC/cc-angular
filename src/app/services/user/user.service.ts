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
  expireAt: any;
  endpoint: String;
  password: string;
  code: string;
  done: any;
  userForm: any;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
  }

  inLog() {
    return ( this.token.length > 5 ) ? true : false;
  }

  covid() {
    this.http.get(`${environment.endpoint}covid-poll/done`).subscribe((data: any) => {
      this.done = data.done;
    }, err => {
      if ( err.status == 403) {
        Swal.fire({
          title: '¡Alto!',
          html: `Confirma tu correo electrónico antes de acceder.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        this.token = '';
        this.expireAt = null;
        localStorage.removeItem('token');
        localStorage.removeItem('expireAt');
        this.router.navigate(['/client/']);
       }
       else if ( err.status == 401) {
        Swal.fire({
          title: '¡Alto!',
          html: `No tienes permisos de estar acá. Inicia sesión y confirma tu correo electrónico antes de acceder a este sitio.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        this.token = '';
        this.expireAt = null;
        localStorage.removeItem('token');
        localStorage.removeItem('expireAt');
        this.router.navigate(['/client/']);
       }
      else {
        Swal.fire({
          title: 'Vaya...',
          html: `Algo ha ocurrido mal. ¡Notifica el error si se repite!<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        this.token = '';
        this.expireAt = null;
        localStorage.removeItem('token');
        localStorage.removeItem('expireAt');
        this.router.navigate(['/client/']);
      }  
    });
    if (this.done) {
      return true
    } else {
      return false
    }
  }

  inForm() {
    this.http.get(`${environment.endpoint}user/me`).subscribe((data: any) => {
      this.userForm = data.user.name;
    });
    return ( this.userForm !== null) ? true : false;
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

  saveStorage(token: string, expireAt: string) {
    localStorage.setItem('token', token );
    localStorage.setItem('expireAt', expireAt );
    this.token = token;
  }

  logout() {
    this.token = '';
    this.expireAt = null;
    localStorage.removeItem('token');
    localStorage.removeItem('expireAt');
    Swal.fire({
      title: 'Has cerrado sesión',
      html: `Nos vemos pronto.`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
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
        this.router.navigate(['/client/']);
        return resolve(true);
      }, err => {
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
