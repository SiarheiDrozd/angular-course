import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.module';
import { CoursesPageModule, CoursesPageComponent } from './pages/courses-page/courses-page.module';
import { LoginPageModule, LoginPageComponent } from './pages/login-page/login-page.module';

import { AuthenticationService } from './services/authentication/authentication.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
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
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    CoursesPageModule,
    LoginPageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
