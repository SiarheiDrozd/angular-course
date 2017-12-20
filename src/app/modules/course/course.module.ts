import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseBlockComponent } from './course-block/course-block.component';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseBlockComponent,
    DurationPipe,
  ],
  exports: [
    CourseBlockComponent
  ]
})
export class CourseModule { }
