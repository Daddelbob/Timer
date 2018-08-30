import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Log } from 'ng2-logger/client';

const log = Log.create('Component: LaghaimComponent');
log.color = 'blue';

const bossesPath = 'laghaim/brazil/bosses/';

@Component({
  selector: 'app-laghaim',
  templateUrl: './laghaim.component.html',
  styleUrls: ['./laghaim.component.scss']
})
export class LaghaimComponent implements OnInit {
  public medusa: Boss;
  public moul: Boss;
  public medusaRemainingDeadTime: number;
  public moulRemainingDeadTime: number;
  timer: any;
  constructor() {}

  ngOnInit() {
    this.timer = setInterval(() => this.tick(), 1000);
    this.getBoss('Medusa').then(boss => {
      this.medusa = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    this.getBoss('Moul').then(boss => {
      this.moul = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });
  }

  tick() {
    const currentTime = new Date().getTime();

    this.medusaRemainingDeadTime =
      this.medusa.lastSlainTimeStamp +
      this.medusa.respawnDuration * 1000 -
      currentTime;
    this.medusaRemainingDeadTime =
      (this.medusaRemainingDeadTime < 0 ? 0 : this.medusaRemainingDeadTime) /
      1000;

    this.moulRemainingDeadTime =
      this.moul.lastSlainTimeStamp +
      this.moul.respawnDuration * 1000 -
      currentTime;
    this.moulRemainingDeadTime =
      (this.moulRemainingDeadTime < 0 ? 0 : this.moulRemainingDeadTime) / 1000;
  }

  getBoss(boss: string): Promise<Boss> {
    log.info('getBoss() call');
    return firebase
      .database()
      .ref(bossesPath + boss)
      .once('value')
      .then(snapshot => {
        return snapshot.val();
      });
  }

  resetBossMedusa() {
    log.info('resetBossMedusa() call');
    firebase
      .database()
      .ref(bossesPath + 'Medusa')
      .set({
        id: 1,
        name: 'Medusa',
        respawnDuration: 86400,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossMoul() {
    log.info('resetBossMoul() call');
    firebase
      .database()
      .ref(bossesPath + 'Moul')
      .set({
        id: 1,
        name: 'Moul',
        respawnDuration: 3600,
        lastSlainTimeStamp: new Date().getTime()
      });
  }
}

export interface Boss {
  id: number;
  name: string;
  respawnDuration: number;
  lastSlainTimeStamp: number;
}
