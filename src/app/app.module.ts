import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CoursesPageModule } from './pages/courses-page/courses-page.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

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
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    BreadcrumbsComponent
  ],
  imports: [
    FormsModule,
    CoursesPageModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
