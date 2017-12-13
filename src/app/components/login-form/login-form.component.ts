import { Component, OnInit } from '@angular/core';
import {AuthenticationService, User} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  providers: [AuthenticationService]
})
export class LoginFormComponent implements OnInit {

  private user: User;

  constructor(private _authService: AuthenticationService) {
    this.user = {
      name: 'User',
      password: 'pass'
    };
  }

  ngOnInit() {
    this.user = this._authService.getUserInfo() || this.user;
  }

  login(): void {
    this._authService.login(this.user);
  }
}
