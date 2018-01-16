import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './usersStorage';

import * as Rx from 'rxjs/Rx';

@Injectable()
class AuthenticationService {

  private _user: Rx.ReplaySubject<User> = new Rx.ReplaySubject(2);

  constructor() { }

  get user() {
    return this.asObservable(this._user);
  }

  private asObservable(subject) {
    return new Rx.Observable(fn => subject.subscribe(fn));
  }

  private checkUser(userToCheck) {
    return USERS.filter((user: User) => {
      console.log(user, this._user);
      return (user.name === userToCheck.name) && (user.password === userToCheck.password);
    })[0];
  }

  login(user: User): void {
    console.log(this.user);
    const userToSet = this.checkUser(this.user);
    if (userToSet) {
      window.localStorage.setItem('user', JSON.stringify(userToSet));
    }
  }

  logout(): void {
    window.localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    Rx.Observable.of(window.localStorage.getItem('user'))
      .subscribe(user => {
        console.log(user);
        this._user.next(JSON.parse(user));
      });

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
