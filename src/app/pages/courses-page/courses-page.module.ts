import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseModule } from '../../components/course-block/course-block.module';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageService } from './courses-page.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    CoursesPageComponent,
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
