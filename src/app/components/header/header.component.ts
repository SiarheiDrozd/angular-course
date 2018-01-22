import {Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy} from '@angular/core';
import {AuthenticationService, User} from '../../services/';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AuthenticationService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authStateSub: Subscription;
  private authUserSub: Subscription;
  public isLogged: boolean;
  public user: User;

  @Input() hideBreadcrumbs: boolean;
  @Input() hideLogIn: boolean;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authStateSub = this.authService.authenticated
      .subscribe((state: boolean) => this.isLogged = state);
    this.authUserSub = this.authService.user
      .subscribe(user => this.user = user);

    const STORED_USER = this.authService.getUserInfo();
    if (STORED_USER && !this.isLogged) {
      this.authService.logIn(STORED_USER);
    }
  }

  logOut() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.authStateSub.unsubscribe();
    this.authUserSub.unsubscribe();
  }
}
