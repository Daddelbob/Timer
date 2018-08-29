import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingSeconds'
})
export class RemainingSecondsPipe implements PipeTransform {
  transform(lastSlain: number, respawnTime: number): any {
    const currentTime = new Date().getTime() * 1000;
    const aliveAt = lastSlain * 1000 + respawnTime;
    const aliveIn = aliveAt - currentTime;
    if (aliveIn >= 0) {
      return aliveIn;
    } else {
      return 0;
    }
  }
}
