import { Injectable } from '@angular/core';
import { User } from './user-interface';

@Injectable()
class AuthenticationService {

  constructor() { }

  login(user: User): void {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    window.localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!window.localStorage.getItem('user');
  }

  getUserInfo(): User {
    return JSON.parse(window.localStorage.getItem('user'));
  }
}

export {
  AuthenticationService,
  User
};
