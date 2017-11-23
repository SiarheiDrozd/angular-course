import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './pages/main-page/main/main.component';
import { FooterComponent } from './pages/main-page/footer/footer.component';
import { HeaderComponent } from './pages/main-page/header/header.component';
import { ButtonComponent } from './common/button/button.component';
import { LogoComponent } from './common/logo/logo.component';
import { CourseBlockComponent } from './common/course-block/course-block.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    CourseBlockComponent,
    LoginPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
