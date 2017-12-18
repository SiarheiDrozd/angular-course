import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../../components/components.module';
import {LoginPageComponent} from './login-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  providers: []
})
class LoginPageModule {
}

export {
  LoginPageModule,
  LoginPageComponent
};
