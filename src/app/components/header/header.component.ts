import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import {AuthenticationService, User} from '../../services/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AuthenticationService]
})
export class HeaderComponent implements OnInit {

  private isLogged: boolean;
  private user: User;

  @Input() hideBreadcrumbs: boolean;
  @Input() hideLogIn: boolean;

  constructor(private _authService: AuthenticationService) {
  }

  ngOnInit() {
    this.isLogged = this._authService.isAuthenticated();
    if (this.isLogged) {
      this.user = this._authService.getUserInfo();
    }
  }

  logOff() {
    this._authService.logout();
    this.isLogged = this._authService.isAuthenticated();
    this.user = null;
  }

}
