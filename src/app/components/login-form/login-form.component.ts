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

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = this.authService.getUserInfo() || this.user;
  }

  login(): void {
    this.authService.login(this.user);

    if (this.authService.isAuthenticated()) {
      this.onLogin.emit();
    }
  }
}
