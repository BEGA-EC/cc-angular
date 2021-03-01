import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: String;
  token: String;
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

  inForm() {
    const me = localStorage.getItem('id');
    return this.http.get(`${environment.endpoint}user/${me}`).subscribe((data: any) => {
      this.userForm =   data.data.avatar;
      if (this.userForm === undefined) { this.router.navigate(['/client/medical']); }
      return (this.userForm != undefined);
    });
  }

  inCovid() {
    const me = localStorage.getItem('id');
    return this.http.get(`${environment.endpoint}user/${me}`).subscribe((data: any) => {
      this.userForm = data.data.covid[0];
      if (this.userForm === undefined) { this.router.navigate(['/client/covid']); }
      return (this.userForm != undefined);
    });
  }

  loadStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
    } else {
      this.token = '';
      this.id = null;
    }
  }

  saveStorage(token: string, id: string) {
    localStorage.setItem('token', token );
    localStorage.setItem('id', id );
    this.token = token;
    this.id = id;
  }

  logout() {
    this.token = '';
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
      const url = `${environment.endpoint}auth`;
      return this.http.post( url, user ).pipe(map( (resp: any) => {
        this.saveStorage(resp.token, resp.id);
        return true;
      }));
    }

  register(email: string, password: string) {
    return new Promise(resolve => {
      const url = `${environment.endpoint}user/`;
      return this.http.post(url, {email, password}).pipe(map( (resp) => {
      })).subscribe( async (resp: any) => {
        if (resp.status === 200) {
          await Swal.fire({
            title: '¡Excelente!',
            html: `Hemos enviado un email de confirmación. Revisa tu corrreo electrónico.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
        } else {
          await Swal.fire({
            title: 'Oh no',
            html: `El servidor no ha recibido los datos. ¿Puedes intentarlo de nuevo? ¡Notifica el error si se repite!<br><br><i>Server status:</i> <b>${resp.status} - ${resp.statusText}</b>`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
        this.router.navigate(['/client/']);
        return resolve(true);
      }, err => {
        if ( err.status === 400) {
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
