import {Injectable} from '@angular/core';
import {User} from './user.class';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthorizationStatus} from './authorizationStatus.interface';
import {Store} from '@ngrx/store';

@Injectable()
class AuthenticationService {
  private _authorizationStatus: ReplaySubject<Object>;
  private readonly host = 'http://localhost:3004';

  constructor(private httpClient: HttpClient,
              private _store: Store<any>) {
    this._authorizationStatus = new ReplaySubject<AuthorizationStatus>(1);

    _store.select('authorizationStatus').subscribe(authorizationStatus => {
      this._authorizationStatus = authorizationStatus;
    });
  }

  get authorizationStatus() {
    return this._authorizationStatus;
  }

  storeLogIn(userToSet) {
    this._store.dispatch({
      type: 'login',
      payload: userToSet
    })
  };

  logIn(userToSet) {
    const body = {
      login: userToSet.login,
      password: userToSet.password,
    };

    this.httpClient.post(`${this.host}/auth/login`, body)
      .subscribe(
        (authStatus: { token: string }) => {
          if (authStatus) {
            localStorage.setItem('userToken', authStatus.token);

            this.httpClient.post(`${this.host}/auth/userinfo`, {})
              .subscribe(
                (userData: Response) => {
                  this._authorizationStatus.next({
                    status: true,
                    message: 'Authorized',
                    user: new User(userData),
                  });
                  this.setUserInfo(userData);
                });
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
            this._authorizationStatus.next({
              status: false,
              message: 'External error',
              user: null,
            });
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this._authorizationStatus.next({
              status: false,
              message: 'Wrong Login/Password pair',
              user: null,
            });
          }
        });
  }

  logOut() {
    this._authorizationStatus.next({
      status: false,
      message: 'Unauthorized',
      user: null,
    });
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
  User,
};
