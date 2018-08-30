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
  constructor() {}

  ngOnInit() {
    this.getBoss('Medusa').then(boss => {
      this.medusa = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });
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
