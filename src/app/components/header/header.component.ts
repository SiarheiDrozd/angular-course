import {Component, OnInit, OnDestroy, AfterContentChecked, Input} from '@angular/core';
import {AuthenticationService, User} from '../../services/';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AuthenticationService],
})
export class HeaderComponent implements OnInit, OnDestroy, AfterContentChecked {

  private authStateSub: Subscription;
  private authUserSub: Subscription;
  public isLogged: boolean;
  public user: User;

  @Input() hideBreadcrumbs: boolean;
  @Input() hideLogIn: boolean;

  constructor(private authService: AuthenticationService) {
    this.authStateSub = this.authService.authenticated
      .subscribe((state: boolean) => this.isLogged = state);
    this.authUserSub = this.authService.user
      .subscribe(user => this.user = user);
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
    this.authUserSub.unsubscribe();
  }

  logOut() {
    this.authService.logOut();
  }


}
