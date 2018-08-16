import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '../../../node_modules/@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
  ],
  declarations: [
  ],
  exports: [
    MatButtonToggleModule
  ]
})
export class CustomMaterialModule { }
