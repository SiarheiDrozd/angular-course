import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from './authentication.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AuthenticationModule {
  static forRoot() {
    return {
      ngModule: AuthenticationModule,
      providers: [AuthenticationService]
    }
  }
}
