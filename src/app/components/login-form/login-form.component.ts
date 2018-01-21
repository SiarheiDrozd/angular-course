import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../../services';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  providers: [AuthenticationService]
})
export class LoginFormComponent implements OnInit {

  public user;
  @Output() whenLogin = new EventEmitter();

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = {};
  }

  login(): void {
    if (this.authService.logIn(this.user)) {
      this.whenLogin.emit({
        success: true,
        user: this.user
      });
    } else {
      this.whenLogin.emit({
        success: false,
        user: null
      });
    }
  }
}
