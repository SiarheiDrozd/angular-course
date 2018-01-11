import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { CreateCoursePageComponent } from './create-course-page.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    CreateCoursePageComponent
  ]
})
class CreateCoursePageModule { }

export {
  CreateCoursePageModule,
  CreateCoursePageComponent
};
