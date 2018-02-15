import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageService } from './courses-page.service';
import { CourseBlockComponent} from './course-block/course-block.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from '../routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    CoursesPageComponent,
    CourseBlockComponent
  ],
  exports: [
    CoursesPageComponent
  ],
  providers: [
    CoursesPageService
  ]
})

class CoursesPageModule { }
export {
  CoursesPageModule,
  CoursesPageComponent
};
