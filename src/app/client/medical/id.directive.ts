import { Injectable, ɵConsole } from '@angular/core';
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

        function idNumber(idNum: Boolean) {
          var number = control.value.substr(0,10);
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
          return idNum = (nCheck % 10) === 0;
        }
        function checkDigit(idNum: Boolean) {
          var numEleven = control.value.substr(0,10);
          var l = numEleven.length, i = 0, j = (l%8), v = 0;

          for(i = 0, l = l-1; i < l; i++) {
            v += parseInt(numEleven[i], 10) * j;
            j = (j === 2) ? 9 : --j;
          }
          return idNum = ((v%11 < 2) ? (0) : (11 - (v%11))) === 0;
        };

        if (idNumber(control.value)) {
          return null;
        }
        else if (checkDigit(control.value)) {
          return null;
        }
        return {idValidator: 'Documento inválido.'};

      }
}
