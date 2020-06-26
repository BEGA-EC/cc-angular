import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { ConfirmationComponent } from './confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    ConfirmationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ConfirmationModule { }
