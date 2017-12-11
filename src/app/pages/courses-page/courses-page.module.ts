import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseModule } from '../../components/course/course.module';

import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageService } from './courses-page.service';
import { ToolboxComponent } from '../../components/toolbox/toolbox.component';

import { ModalComponent } from "../../components/modal/modal.component";

@NgModule({
  imports: [
    CommonModule,
    CourseModule,
    FormsModule
  ],
  declarations: [
    CoursesPageComponent,
    ToolboxComponent,
    ModalComponent
  ],
  exports: [
    CoursesPageComponent,
    ToolboxComponent,
    ModalComponent
  ],
  providers: [
    CoursesPageService
  ]
})
export class CoursesPageModule { }
