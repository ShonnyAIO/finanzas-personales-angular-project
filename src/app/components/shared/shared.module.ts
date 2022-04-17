import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MaterialModule } from '../../material/material.module';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';

/* FORMULARIO REACTIVO */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MaterialModule,
    SideBarComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class SharedModule { }
