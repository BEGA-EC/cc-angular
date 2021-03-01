import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  postCode(code: string) {
    return new Promise(resolve => {
      let url = `${environment.endpoint}user/code`;
      this.http.post(url, {code: code}).subscribe( (resp: any) => {
        Swal.fire({
          title: 'Genial',
          html: `Tu código ha sido confirmado. Puedes iniciar sesión.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['/client/']);
        return resolve(true);
      }, err =>{
        if ( err.status === 400) {
          Swal.fire({
            title: 'Oh no',
            html: `Parece que algo ha salido mal. El enlace es incorrecto.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
          this.router.navigate(['/client/']);
        } else if (err.status === 404) {
          Swal.fire({
            title: '¿Ha pasado algo?',
            text: `Al parecer el servidor ha recibido un código inexistente. Quizás su cuenta ya esté confirmada`,
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
          this.router.navigate(['/client/']);
        }
        else {
          Swal.fire({
            title: 'Vaya...',
            html: `El servidor no ha recibido los datos. ¿Puedes intentarlo de nuevo? ¡Notifica el error si se repite!<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
          this.router.navigate(['/client/']);
        }
      });
    });
  }
}
