import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalComponent } from './medical.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MedicalComponent],
  imports: [
    CommonModule,
    MedicalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicalModule { }
