import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.module';
import { CoursesPageModule, CoursesPageComponent } from './pages/courses-page/courses-page.module';
import { LoginPageModule, LoginPageComponent } from './pages/login-page/login-page.module';
import { CreateCoursePageModule, CreateCoursePageComponent } from './pages/create-course-page/create-course-page.module';

import { AuthenticationModule } from './services/authentication/authentication.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
    ComponentsModule,
    CoursesPageModule,
    LoginPageModule,
    CreateCoursePageModule,
    AuthenticationModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
