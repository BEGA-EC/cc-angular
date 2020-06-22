import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: String;
  endpoint: String;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
  }

  inLog() {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse( localStorage.getItem('user') );
    } else {
      this.token = '';
      this.user = null;
    }
  }

  saveStorage(token: string, expireAt: string, user: User) {
    localStorage.setItem('token', token );
    localStorage.setItem('expireAt', expireAt );
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }

  logout() {
    this.token = '';
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
  login( user: User) {
    let url = `${this.endpoint}/user  /login`;
    return this.http.post( url, user ).pipe(map( (resp: any) => {
      this.saveStorage( resp.token, resp.expiredAt, resp.user );
      return true;
    }));
  }
}
