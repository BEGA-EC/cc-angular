import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidComponent } from './covid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule,
    CovidRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CovidModule { }
