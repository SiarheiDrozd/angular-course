import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ComponentsModule } from './components/components.module';
import { CoursesPageModule, CoursesPageComponent } from './pages/courses-page/courses-page.module';
import { LoginPageModule, LoginPageComponent } from './pages/login-page/login-page.module';
import { CreateCoursePageModule, CreateCoursePageComponent } from './pages/create-course-page/create-course-page.module';

import { AuthenticationModule } from './services/authentication/authentication.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {AuthInterceptor} from './services/authentication/auth-interceptor.class';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'create-course', component: CreateCoursePageComponent },
  { path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CoursesPageModule,
    LoginPageModule,
    CreateCoursePageModule,
    HttpClientModule,
    AuthenticationModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
