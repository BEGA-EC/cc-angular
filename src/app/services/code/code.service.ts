import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor( 
    public http: HttpClient,
    public router: Router
  ) { }
  
  postCode(code: string) {
    let url = `${environment.endpoint}user/confirmation-code`;
    this.http.post(url, {code: code}).pipe(map( (resp: boolean) => {
      this.router.navigate(['/client']);
    })
  )}
}
