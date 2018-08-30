import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingSeconds'
})
export class RemainingSecondsPipe implements PipeTransform {
  transform(lastSlainTimeStamp: number, respawnDuration: number): any {
    const currentTime = new Date().getTime();
    const respawnTimeStamp = lastSlainTimeStamp + respawnDuration * 1000;
    const remainingDeadTime = respawnTimeStamp - currentTime;
    if (remainingDeadTime >= 0) {
      return Math.floor(remainingDeadTime / 1000);
    } else {
      return 0;
    }
  }
}
