import {Action, ActionReducer} from "@ngrx/store";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "./user.class";

export const LOGIN = 'login';
export const LOGOUT = 'logout';

export const authenticationReducer: ActionReducer = (store: {}, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return logIn(action.payload)
  }
};

export class authenticationLogin implements Action {
  type = LOGIN;

  constructor(public payload: any, private httpClient: HttpClient) {}
}

function logIn({userToSet}){
  const body = {
    login: userToSet.login,
    password: userToSet.password
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
                  user: new User(userData)
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
            user: null
          });
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          this._authorizationStatus.next({
            status: false,
            message: 'Wrong Login/Password pair',
            user: null
          });
        }
      });
}
