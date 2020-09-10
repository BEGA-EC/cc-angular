import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Covid } from 'src/app/models/covid.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  
  constructor(public http: HttpClient, public router: Router) {}

  postCode(poll: Covid) {
    let id = localStorage.getItem('id');
    let url = `${environment.endpoint}user/covid/${id}`;
    this.http.post(url, {poll}).subscribe((resp: boolean) => {
      this.router.navigate(['/client/dashboard']);
      Swal.fire({
        title: 'Genial',
        html: `Has llegado al final. Puedes acceder a tu panel de administración.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }, err => {
      console.log(err);
      if (err.error.description == 'User already has a poll') {
        Swal.fire({
          title: 'Un momento',
          html: `Parece que ya has realizado esta encuesta antes. ¡No puedes repetir!`,
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['/client/dashboard']);
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
  }
}