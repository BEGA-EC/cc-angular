import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeService, CovidService, FormService, UserService } from './service.index'


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CodeService,
    CovidService,
    FormService,
    UserService
  ],
  declarations: []
})
export class ServiceModule { }
