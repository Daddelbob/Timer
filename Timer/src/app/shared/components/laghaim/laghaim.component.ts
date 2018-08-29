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
  constructor() {}

  ngOnInit() {
    this.getBoss('Medusa');
  }

  getBoss(boss: string) {
    log.info('getBoss() call');
    return firebase
      .database()
      .ref(bossesPath + boss)
      .once('value')
      .then(function(snapshot) {
        console.log('SNAPSHOT', snapshot);
        const username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
        console.log('username', username);
        return username;
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
