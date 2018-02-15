import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { CoursesPageModule } from './pages/courses-page/courses-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { CreateCoursePageModule } from './pages/create-course-page/create-course-page.module';

import { AuthenticationModule } from './services/authentication/authentication.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {AuthInterceptor} from './services/authentication/auth-interceptor.class';
import {PipesModule} from './pipes/pipes.module';
import {AppRoutes} from './pages/routes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PipesModule,
    ComponentsModule,
    CoursesPageModule,
    LoginPageModule,
    CreateCoursePageModule,
    HttpClientModule,
    AuthenticationModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
