import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseModule } from '../../modules/course/course.module';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageService } from './courses-page.service';
import { ToolboxComponent } from "../../components/toolbox/toolbox.component";

@NgModule({
  imports: [
    CommonModule,
    CourseModule,
    FormsModule
  ],
  declarations: [
    CoursesPageComponent,
    ToolboxComponent
  ],
  exports: [
    CoursesPageComponent,
    ToolboxComponent
  ],
  providers: [
    CoursesPageService
  ]
})
export class CoursesPageModule { }
