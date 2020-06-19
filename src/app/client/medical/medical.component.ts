import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  dataForm: FormGroup;
  defaultDate = '1987/06/30';
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      last: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(1000000000), Validators.max(9999999999)]],
      conv: ['', [Validators.required, Validators.minLength(1000000), Validators.max(999999999)]],
      cel: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(1000000000), Validators.max(9999999999)]],
      emer: ['', [Validators.required, Validators.minLength(1000000), Validators.max(9999999999)]],
      provincia: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      callePri: ['', [Validators.required]],
      nomencla: ['', [Validators.required]],
      calleSec: ['', [Validators.required]],
      nameNeg: ['', [Validators.required]],
      razonSoc: ['', [Validators.required]],
      numLocal: ['', [Validators.required]],
      predio: ['', [Validators.required]],
      pasillo: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      dob: [this.defaultDate]
    });
  }
  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.dataForm.get('dob').setValue(date, {
      onlyself: true
    });
  }

  get errorControl() {
    return this.dataForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.dataForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba los datos ingresados e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.log(this.dataForm);
      return false;
    } else {
      Swal.fire({
        title: 'Genial',
        html: `¡Bien! Ya casi terminamos, solo hace falta un último formulario y estamos en ello.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}
