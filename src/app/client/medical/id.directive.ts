import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap, subscribeOn  } from 'rxjs/operators';
import {Directive} from '@angular/core';


@Directive({
  selector: '[idValidator]',
  providers: [
      {provide: NG_VALIDATORS, useExisting: IdValidator, multi: true}
  ]
})
  export class IdValidator implements Validator {
    constructor() {}
  
      validate(control: AbstractControl) : ValidationErrors | null {

        function idNumber(idNum: boolean) {
          var number = control.value; 
          var nCheck = 0, nDigit = 0, bEven = false;
          number = number.replace(/\D/g, "");
          for (var n = number.length - 1; n >= 0; n--) {
              var cDigit = number.charAt(n),
                  nDigit = parseInt(cDigit, 10);
              if (bEven) {
                  if ((nDigit *= 2) > 9) nDigit -= 9;
              }
              nCheck += nDigit;
              bEven = !bEven;
          }
          return idNum = (nCheck % 10) == 0;
        }

        if (idNumber(control.value)) {
          return null; // Tamos bien
        }
        return {idValidator: 'Cédula inválida.'};

      }
}