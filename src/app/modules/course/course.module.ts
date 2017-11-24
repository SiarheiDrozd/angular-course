import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseBlockComponent } from './course-block/course-block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseBlockComponent,
  ],
  exports: [
    CourseBlockComponent
  ]
})
export class CourseModule { }
