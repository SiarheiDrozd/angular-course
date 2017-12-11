import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ModalComponent } from "./modal/modal.component";
import { ToolboxComponent } from "./toolbox/toolbox.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ModalComponent,
    ToolboxComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ModalComponent,
    ToolboxComponent
  ]
})
export class ComponentsModule { }
