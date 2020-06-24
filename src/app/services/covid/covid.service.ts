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
    let url = `${environment.endpoint}covid-poll`;
    this.http.post(url, {poll}).subscribe((resp: boolean) => {
      this.router.navigate(['/client/dashboard']);
      Swal.fire({
        title: 'Genial',
        html: `Has llegado al final. Puedes acceder a tu panel de administración.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  )}
}
