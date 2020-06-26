import { Injectable } from '@angular/core';
import { Personal } from '../../models/personal.model';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Covid } from 'src/app/models/covid.model';
import { environment } from 'src/environments/environment';
import { Medical } from 'src/app/models/medical.model';
import { Comercial } from 'src/app/models/comercial.model';
import { Tributary } from 'src/app/models/tributary.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  personalData: Personal;
  covidData: Covid;
  medicalData: Medical;
  comercialData: Comercial;
  tributaryData: Tributary;

  constructor(public http: HttpClient, public router: Router) {}

  async upload(tributary: Tributary, comercial: Comercial, medical: Medical ,personal: Personal,  avatar: any) {
    let url = `${environment.endpoint}user/register/info-forms`;
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('tributaryInformation', JSON.stringify(tributary));
    formData.append('commercialInformation', JSON.stringify(comercial));
    formData.append('medicalInformation', JSON.stringify(medical));
    formData.append('personalInformation', JSON.stringify(personal));
    this.http.post(url, formData).subscribe( (resp: any) => 
      {this.router.navigate(['/client/covid']);
        Swal.fire({
          title: 'Genial',
          html: `¡Bien! Ya casi terminamos, solo hace falta un último formulario y estamos en ello.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      }, err => {
        if ( err.status == 400) {
          Swal.fire({
            title: 'Oh no',
            html: `Parece que algo ha salido mal. ¿Ingresaste bien los datos?<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
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
      }
    );
  }
}
