import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from './usersStorage';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
class AuthenticationService {

  private _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _user: ReplaySubject<User> = new ReplaySubject<User>(2);

  constructor() {
  }

  get user() {
    return this._user.asObservable();
  }

  get authenticated() {
    return this._isAuthenticated.asObservable();
  }

  private checkUser(userToCheck) {
    return USERS.find((user: User) => {
      return (user.name === userToCheck.name) && (user.password === userToCheck.password);
    });
  }

  logIn(userToSet): boolean {
    userToSet = this.checkUser(userToSet);

    if (userToSet) {
      this._user.next(userToSet);
      this._isAuthenticated.next(true);
      this.setUserInfo(userToSet);
      return true;
    }

    return false;
  }

  logOut() {
    this._user.next(null);
    this._isAuthenticated.next(false);
    window.localStorage.removeItem('user');
  }

  getUserInfo(): User {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  setUserInfo(userToSet): void {
    window.localStorage.setItem('user', JSON.stringify(userToSet));
  }
}

export {
  AuthenticationService,
  User
};
