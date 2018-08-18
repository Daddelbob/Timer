import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  transform(
    countedTotalSeconds: number,
    selectedTotalSeconds: number,
    countingDownMode: boolean
  ): any {
    const date = new Date(null);
    if (!countingDownMode) {
      date.setSeconds(countedTotalSeconds);
      return date.toISOString().substr(11, 8);
    } else if (countingDownMode) {
      date.setSeconds(selectedTotalSeconds - countedTotalSeconds);
      return date.toISOString().substr(11, 8);
    }
  }
}
