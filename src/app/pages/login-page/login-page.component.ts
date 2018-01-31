import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  handleLogin(result) {
    if (result.success) {
      this._location.back();
    }
  }
}
