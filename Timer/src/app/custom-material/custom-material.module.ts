import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '../../../node_modules/@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule
  ]
})
export class CustomMaterialModule {}
