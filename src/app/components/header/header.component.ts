import {Component, OnInit, OnDestroy, AfterContentChecked, Input, ChangeDetectionStrategy} from '@angular/core';
import {AuthenticationService, User} from '../../services/';
import {Subscription} from 'rxjs/Subscription';
import {AuthorizationStatus} from '../../services/authentication/authorizationStatus.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authStateSub: Subscription;
  public isLogged: boolean;
  public user: User;
  public authStatus: string;

  @Input() hideBreadcrumbs: boolean;
  @Input() hideLogIn: boolean;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    const STORED_USER = this.authService.getUserInfo();
    if (STORED_USER && !this.isLogged) {
      this.authService.logIn(STORED_USER);
      this.authService.storeLogIn(STORED_USER);
    }

    this.authStateSub = this.authService.authorizationStatus
      .subscribe((state: AuthorizationStatus) => {
        this.isLogged = state.status;
        if (this.isLogged) {
          this.user = Object.assign(state.user);
        }
        this.authStatus = state.message;
      });
  }

  ngOnDestroy() {
    this.authStateSub.unsubscribe();
  }

  logOut() {
    this.authService.logOut();
  }
}
