import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseModule } from './modules/course/course.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/common/button/button.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchFormComponent } from './components/common/search-form/search-form.component';

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
    CoursesPageComponent,
    PageNotFoundComponent,
    SearchFormComponent
  ],
  imports: [
    FormsModule,
    CourseModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
