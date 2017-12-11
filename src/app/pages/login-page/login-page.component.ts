import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public path: object;

  constructor() { }

  ngOnInit() {
    this.path = {
      name: 'login-page',
      path: 'login'
    }
  }

}
