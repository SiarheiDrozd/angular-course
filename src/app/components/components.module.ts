import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import * as CommonComponents from './';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...Object.values(CommonComponents)
  ],
  exports: [
    ...Object.values(CommonComponents)
  ]
})
export class ComponentsModule { }
