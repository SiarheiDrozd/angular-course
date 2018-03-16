import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    ReactiveFormsModule,
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
