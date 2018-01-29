import {Component, OnInit, OnDestroy, AfterContentChecked, Input} from '@angular/core';
import {AuthenticationService, User} from '../../services/';
import {Subscription} from 'rxjs/Subscription';
import {AuthorizationStatus} from '../../services/authentication/authorizationStatus.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterContentChecked {

  private authStateSub: Subscription;
  public isLogged: boolean;
  public user: User;
  public authStatus: string;

  @Input() hideBreadcrumbs: boolean;
  @Input() hideLogIn: boolean;

  constructor(private authService: AuthenticationService) {
    this.authStateSub = this.authService.authorizationStatus
      .subscribe((state: AuthorizationStatus) => {
        this.isLogged = state.status;
        if (this.isLogged) {
          this.user = state.user;
        }
        this.authStatus = state.message;
      });
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    const STORED_USER = this.authService.getUserInfo();
    if (STORED_USER && !this.isLogged) {
      this.authService.logIn(STORED_USER);
    }
  }

  ngOnDestroy() {
    this.authStateSub.unsubscribe();
  }

  logOut() {
    this.authService.logOut();
  }
}
