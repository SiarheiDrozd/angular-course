import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseModule } from './modules/course/course.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/common/button/button.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/courses-page/courses-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'courses', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    LoginPageComponent,
    MainPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CourseModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
