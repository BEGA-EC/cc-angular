import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

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
    public _userService: UserService,
    public router: Router) { }

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
      this._userService.login(user).subscribe( correcto => this.router.navigate(['/client/medical']));
    }
  }
}
