import {CreateCoursePageComponent} from './create-course-page/create-course-page.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {path: 'courses', component: CoursesPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'courses/new', component: CreateCoursePageComponent},
  {path: 'courses/:id', component: CreateCoursePageComponent, data: {}},
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];
