import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseBlockComponent } from './course-block.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    CourseBlockComponent
  ],
  exports: [
    CourseBlockComponent
  ]
})
export class CourseModule { }
