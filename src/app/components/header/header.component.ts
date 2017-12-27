import {Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import {AuthenticationService, User} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AuthenticationService]
})
export class HeaderComponent implements OnInit {

  private user: User;

  @Input() hideBreadcrumbs: boolean;

  constructor(private _authService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = this._authService.getUserInfo();
  }

}
