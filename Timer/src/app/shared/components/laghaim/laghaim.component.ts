import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

const bossesPath = 'laghaim/brazil/bosses/';

@Component({
  selector: 'app-laghaim',
  templateUrl: './laghaim.component.html',
  styleUrls: ['./laghaim.component.scss']
})
export class LaghaimComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.setBoss();
  }

  getBoss(boss: string) {
    return firebase
      .database()
      .ref(bossesPath + boss)
      .once('value')
      .then(function(snapshot) {
        const username =
          (snapshot.val() && snapshot.val().name) || 'Anonymous';
        return username;
      });
  }

  setBoss() {
    firebase
      .database()
      .ref(bossesPath + 'Medusa')
      .set({
        id: 1,
        name: 'Medusa',
        respawnTime: 86400
      });
  }
}
