import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Pipes from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...Object.values(Pipes)
  ],
  exports: [
    ...Object.values(Pipes)
  ]
})
export class PipesModule { }
