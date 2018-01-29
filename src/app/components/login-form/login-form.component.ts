import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../../services';
import {AuthorizationStatus} from '../../services/authentication/authorizationStatus.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  providers: [AuthenticationService]
})
export class LoginFormComponent implements OnInit {

  private user;
  private authStatusMessage: string;
  private authStatus: boolean;
  @Output() whenLogin = new EventEmitter();

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = {};
    this.authService.authorizationStatus
      .subscribe((authSt: AuthorizationStatus) => {
        console.log(authSt);
        this.authStatusMessage = authSt.message;
        this.authStatus = authSt.status;
      });
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
