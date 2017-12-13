import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [AuthenticationService]
})
export class HeaderComponent implements OnInit {

  path: object;
  private user: object;

  constructor(private _authService: AuthenticationService) {
  }

  ngOnInit() {
    this.path = {
      name: 'Courses',
      path: 'courses'
    };
    this.user = this._authService.getUserInfo();
  }

}
