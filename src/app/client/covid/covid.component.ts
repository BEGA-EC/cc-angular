import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  covidForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.covidForm = this.formBuilder.group({
      tos: ['', [Validators.required]],
      tosComment: [''],
      fiebre: ['', [Validators.required]],
      fiebreComment: [''],
      cefalea: ['', [Validators.required]],
      cefaleaComment: [''],
      disnea: ['', [Validators.required]],
      disneaComment: [''],
      diarrea: ['', [Validators.required]],
      diarreaComment: [''],
      vomito: ['', [Validators.required]],
      vomitoComment: [''],
      perdidaOlfato: ['', [Validators.required]],
      perdidaOlfatoComment: [''],
      perdidaGusto: ['', [Validators.required]],
      perdidaGustoComment: [''],
      contactoConPersonas: ['', [Validators.required]],
      contactoConPersonasComment: [''],
      viaje: ['', [Validators.required]],
      viajeComment: [''],
      acudidoMedico: ['', [Validators.required]],
      acudidoMedicoComment: [''],
      medicamento: ['', [Validators.required]],
      medicamentoComment: [''],
      libreDeFiebre: ['', [Validators.required]],
      libreDeFiebreComment: [''],
      familiar14Dias: ['', [Validators.required]],
      familiar14DiasComment: [''],
      persona14Dias: ['', [Validators.required]],
      persona14DiasComment: [''],
      diabetes: ['', [Validators.required]],
      diabetesComment: [''],
      cardioRespiratorias: ['', [Validators.required]],
      cardioRespiratoriasComment: [''],
      renales: ['', [Validators.required]],
      renalesComment: [''],
      respiratorias: ['', [Validators.required]],
      respiratoriasComment: [''],
      inmunodeficiencia: ['', [Validators.required]],
      inmunodeficienciaComment: [''],
      embarazo: ['', [Validators.required]],
      embarazoComment: [''],
      cancer: ['', [Validators.required]],
      cancerComment: [''],
      mayor60: ['', [Validators.required]],
      mayor60Comment: ['']
    });
  }
  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.covidForm.get('dob').setValue(date, {
      onlyself: true
    });
  }

  get errorControl() {
    return this.covidForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.covidForm.valid) {
      Swal.fire({
        title: 'Oh no',
        text: `Parece que algo ha salido mal. Comprueba los datos ingresados e intenta de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      console.log(this.covidForm);
      Swal.fire({
        title: 'Genial',
        html: `¡Bien! Ya casi terminamos, solo hace falta un último formulario y estamos en ello.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}