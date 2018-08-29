import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerPipe } from './pipes/timer/timer.pipe';
import { LaghaimComponent } from './components/laghaim/laghaim.component';
import { RemainingSecondsPipe } from './pipes/remaining-seconds/remaining-seconds.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TimerPipe, RemainingSecondsPipe, LaghaimComponent],
  exports: [TimerPipe, RemainingSecondsPipe, LaghaimComponent]
})
export class SharedModule {}
