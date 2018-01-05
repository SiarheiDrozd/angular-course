import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService, User} from '../../services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  providers: [AuthenticationService]
})
export class LoginFormComponent implements OnInit {

  private user: User;
  @Output() onLogin = new EventEmitter();

  constructor(private _authService: AuthenticationService) {
    this.user = {
      name: 'User',
      password: 'pass',
      permitions: {
        edit: false
      }
    }
  }

  ngOnInit() {
    this.user = this._authService.getUserInfo() || this.user;
  }

  login(): void {
    this._authService.login(this.user);

    if (this._authService.isAuthenticated()) {
      this.onLogin.emit();
    }
  }
}
