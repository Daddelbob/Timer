import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPipe } from './pipes/timer/timer.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimerPipe],
  exports: [TimerPipe]
})
export class SharedModule { }
