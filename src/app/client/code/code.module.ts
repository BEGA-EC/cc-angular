import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CodeComponent],
  imports: [
    CommonModule,
    CodeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CodeModule { }
