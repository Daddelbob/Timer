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
        respawnTime: boss.respawnTime,
        lastSlain: boss.lastSlain
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
        // const boss: Boss = {
        //   id: snapshot.val().id,
        //   name: snapshot.val().name,
        //   respawnTime: snapshot.val().respawnTime,
        //   lastSlain: snapshot.val().lastSlain
        // };
        // console.log('BOSSSSS', boss);
        // return boss;
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
        respawnTime: 86400,
        lastSlain: new Date().getTime()
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
        respawnTime: 3600,
        lastSlain: new Date().getTime()
      });
  }
}

export interface Boss {
  id: number;
  name: string;
  respawnTime: number;
  lastSlain: number;
}
