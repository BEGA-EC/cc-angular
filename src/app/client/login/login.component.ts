import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/service.index';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public userService: UserService,
    public router: Router,
    public loadingService: LoadingService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
      password: ['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba los datos ingresados e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      let user = {email: this.loginForm.value.email, password: this.loginForm.value.password};
      this.userService.login(user).subscribe(correcto =>{
        this.router.navigate(['/client/dashboard']);
      }, err => {
          if (err.status === 400) {
            Swal.fire({
              title: '¡Intento fallido!',
              text: `La combinación de email y contraseña que has usado es incorrecta. Intenta nuevamente.`,
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          } else if (err.status === 403) {
            Swal.fire({
              title: '¡Intento fallido!',
              text: `No has confirmado tu correo electrónico. Ingresa a tu correo electrónico y comprueba tus carpetas de Entregados o SPAM`,
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          } else {
            Swal.fire({
              title: 'Vaya...',
              html: `El servidor no ha recibido los datos. ¿Puedes intentarlo de nuevo? ¡Notifica el error si se repite!<br><br><i>Server status:</i> <b>${err.status} - ${err.statusText}</b>`,
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
        }
      )}
  }
}
