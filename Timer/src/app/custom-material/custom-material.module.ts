import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '../../../node_modules/@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule
  ],
  declarations: [],
  exports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule
  ]
})
export class CustomMaterialModule {}
