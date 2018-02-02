import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import * as CommonComponents from './';
import { CheckboxListComponent } from './checkbox-list/checkbox-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...Object.values(CommonComponents),
    CheckboxListComponent
  ],
  exports: [
    ...Object.values(CommonComponents)
  ]
})
export class ComponentsModule { }
