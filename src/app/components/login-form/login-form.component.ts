import {Component, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {AuthenticationService} from '../../services';
import {AuthorizationStatus} from '../../services/authentication/authorizationStatus.interface';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  providers: [AuthenticationService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private user;
  private authStatusMessage: string;
  private authStatus: boolean;
  private authServiceSub: Subscription;
  @Output() whenLogin = new EventEmitter();

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = {
      login: '',
      password: ''
    };
    this.authServiceSub = this.authService.authorizationStatus
      .subscribe((authSt: AuthorizationStatus) => {
        this.authStatusMessage = authSt.message;
        this.authStatus = authSt.status;
      });
  }

  ngOnDestroy() {
    this.authServiceSub.unsubscribe();
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
