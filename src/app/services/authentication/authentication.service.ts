import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  login(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    window.localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!window.localStorage.getItem('user');
  }

  getUserInfo(): object {
    return JSON.parse(window.localStorage.getItem('user'));
  }
}
