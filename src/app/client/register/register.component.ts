import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;
  email: string;

  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public _userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]]
    });
  }

  get errorControl() {
    return this.registerForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba el correo electrónico e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      let email = this.registerForm.value.email;
      console.log(`Email: ${email}`)
      this._userService.register(email);
      // Swal.fire({
      //   title: 'Genial',
      //   html: `Se ha enviado una contraseña temporal a la siguiente dirección: <b>${this.registerForm.value.email}</b>`,
      //   icon: 'success',
      //   confirmButtonText: 'Aceptar'
      // });
    }
  }
}
