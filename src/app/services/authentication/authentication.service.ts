import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  login(user) {
    window.localStorage.setItem('user', user);
  }

  logout() {
    window.localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!window.localStorage.getItem('user');
  }

  getUserInfo(): string {
    return window.localStorage.getItem('user');
  }
}
