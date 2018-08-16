import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  transform(value: number): any {
    const date = new Date(null);
    date.setSeconds(value);
    return date.toISOString().substr(11, 8);
  }
}
