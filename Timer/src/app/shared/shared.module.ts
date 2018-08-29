import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPipe } from './pipes/timer/timer.pipe';
import { LaghaimComponent } from './components/laghaim/laghaim.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TimerPipe, LaghaimComponent],
  exports: [TimerPipe, LaghaimComponent]
})
export class SharedModule { }
