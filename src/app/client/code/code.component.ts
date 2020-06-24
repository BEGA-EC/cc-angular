import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { UserService, CodeService } from 'src/app/services/service.index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  
  codeForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public _userService: UserService,
    public _codeService: CodeService,
    public router: Router) { }

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      code: ['', [Validators.required]]
    });
  }

  get errorControl() {
    return this.codeForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.codeForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Debes ingresar un código de verificación.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      let code = this.codeForm.value.code;
      this._codeService.postCode(code);
      Swal.fire({
        title: 'Genial',
        html: `¡Genial! Ya puedes iniciar sesión.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      return this.router.navigate(['/client']);
    }
  }
}