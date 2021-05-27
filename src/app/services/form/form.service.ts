import { Injectable, NgZone } from '@angular/core';
import { Personal } from '../../models/personal.model';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Covid } from 'src/app/models/covid.model';
import { environment } from 'src/environments/environment';
import { Medical } from 'src/app/models/medical.model';
import { Address } from 'src/app/models/address.model';
import { Admin } from 'src/app/models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  addressData: Address;
  adminData: Admin;

  constructor(public http: HttpClient, public router: Router) {}

  async upload(admin: Admin, address: Address, avatar: any, locals: any[]) {
    const urlCheck = `${environment.endpoint}user/check`;
    const localBody = JSON.stringify(locals);
    this.http.post(urlCheck, {locals: localBody}).subscribe( (resp: any) => {
      this.submit(admin, address, avatar);
    },
    error => {
      console.log(error);
      Swal.fire({
        title: 'El servidor ha retornado un error',
        html: `${error.error}`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  }

  private submit(admin: Admin, address: Address, avatar: any) {
    const id = localStorage.getItem('id');
    const url = `${environment.endpoint}user/admin/${id}`;
    const urlAva = `${environment.endpoint}user/avatar/${id}`;
    const formData = new FormData();
    const formAva = new FormData();
    formAva.append('avatar', avatar);
    formData.append('address', JSON.stringify(address));
    formData.append('admin', JSON.stringify(admin));
    this.http.post(urlAva, formAva).subscribe( (resp: any) => {
      this.http.post(url, formData).subscribe( (post: any) =>
        {
          console.log(resp);
          console.log(post);
          Swal.fire({
            title: 'Genial',
            html: `¡Bien! Ya casi terminamos, solo hace falta un último formulario y estamos en ello.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            window.location.href = 'client/covid';
          });
        }, err => {
          console.log(err);
          if (err.error.description === 'Tax information is already in use.') {
            Swal.fire({
              title: 'Oh no',
              html: `El número de RUC/RISE que has ingresado, ya se encuentra en uso.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
          else if (err.error.description === 'Id Number already in use') {
            Swal.fire({
              title: 'Oh no',
              html: `El número de cédula que has ingresado, ya se encuentra en uso.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
          else if (err.error.description === 'A local with that predio number or local number already exists') {
            Swal.fire({
              title: 'Oh no',
              html: `Has ingresado un número de local o un número de predio que ya se encuentra en uso.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
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
    }, err => {
      console.log(err);
      if (err.error.description === 'Tax information is already in use.') {
        Swal.fire({
          title: 'Oh no',
          html: `El número de RUC/RISE que has ingresado, ya se encuentra en uso.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
      else if (err.error.description === 'Id Number already in use') {
        Swal.fire({
          title: 'Oh no',
          html: `El número de cédula que has ingresado, ya se encuentra en uso.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
      else if (err.error.description === 'A local with that predio number or local number already exists') {
        Swal.fire({
          title: 'Oh no',
          html: `Has ingresado un número de local o un número de predio que ya se encuentra en uso.<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
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
  }

}
