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
  public s1: Boss;
  public s1RemainingDeadTime: number;

  public s2: Boss;
  public s2RemainingDeadTime: number;

  public turan: Boss;
  public turanRemainingDeadTime: number;

  public barsha: Boss;
  public barshaRemainingDeadTime: number;

  public balkarya: Boss;
  public balkaryaRemainingDeadTime: number;

  public quieze: Boss;
  public quiezeRemainingDeadTime: number;

  public beagrid: Boss;
  public beagridRemainingDeadTime: number;

  public north: Boss;
  public northRemainingDeadTime: number;

  public east: Boss;
  public eastRemainingDeadTime: number;

  public south: Boss;
  public southRemainingDeadTime: number;

  public west: Boss;
  public westRemainingDeadTime: number;

  public drake: Boss;
  public drakeRemainingDeadTime: number;

  public queen: Boss;
  public queenRemainingDeadTime: number;

  public moule: Boss;
  public mouleRemainingDeadTime: number;

  timer: any;
  constructor() {}

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

  ngOnInit() {
    this.timer = setInterval(() => this.tick(), 1000);

    // this.resetBossS1();
    // this.resetBossS2();

    // this.resetBossTuran();
    // this.resetBossBarsha();
    // this.resetBossBalkarya();
    // this.resetBossQuieze();
    // this.resetBossBeagrid();

    // this.resetBossNorth();
    // this.resetBossEast();
    // this.resetBossSouth();
    // this.resetBossWest();

    // this.resetBossDrake();
    // this.resetBossQueen();
    // this.resetBossMoule();

    this.getBoss('S1').then(boss => {
      this.s1 = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    this.getBoss('S2').then(boss => {
      this.s2 = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    ///////////////////////////////////////

    this.getBoss('Turan').then(boss => {
      this.turan = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    this.getBoss('Barsha').then(boss => {
      this.barsha = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    this.getBoss('Balkarya').then(boss => {
      this.balkarya = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    this.getBoss('Quieze').then(boss => {
      this.quieze = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    this.getBoss('Beagrid').then(boss => {
      this.beagrid = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    ///////////////////////////////////////

    this.getBoss('North').then(boss => {
      this.north = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });
    this.getBoss('East').then(boss => {
      this.east = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });
    this.getBoss('South').then(boss => {
      this.south = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });
    this.getBoss('West').then(boss => {
      this.west = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    ///////////////////////////////////////

    this.getBoss('Queen').then(boss => {
      this.queen = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });

    this.getBoss('Moule').then(boss => {
      this.moule = {
        id: boss.id,
        name: boss.name,
        respawnDuration: boss.respawnDuration,
        lastSlainTimeStamp: boss.lastSlainTimeStamp
      };
    });
  }

  tick() {
    const currentTime = new Date().getTime();

    this.s1RemainingDeadTime =
      this.s1.lastSlainTimeStamp + this.s1.respawnDuration * 1000 - currentTime;
    this.s1RemainingDeadTime =
      (this.s1RemainingDeadTime < 0 ? 0 : this.s1RemainingDeadTime) / 1000;

    this.s2RemainingDeadTime =
      this.s2.lastSlainTimeStamp + this.s2.respawnDuration * 1000 - currentTime;
    this.s2RemainingDeadTime =
      (this.s2RemainingDeadTime < 0 ? 0 : this.s2RemainingDeadTime) / 1000;

    this.turanRemainingDeadTime =
      this.turan.lastSlainTimeStamp +
      this.turan.respawnDuration * 1000 -
      currentTime;
    this.turanRemainingDeadTime =
      (this.turanRemainingDeadTime < 0 ? 0 : this.turanRemainingDeadTime) /
      1000;

    this.barshaRemainingDeadTime =
      this.barsha.lastSlainTimeStamp +
      this.barsha.respawnDuration * 1000 -
      currentTime;
    this.barshaRemainingDeadTime =
      (this.barshaRemainingDeadTime < 0 ? 0 : this.barshaRemainingDeadTime) /
      1000;

    this.balkaryaRemainingDeadTime =
      this.balkarya.lastSlainTimeStamp +
      this.balkarya.respawnDuration * 1000 -
      currentTime;
    this.balkaryaRemainingDeadTime =
      (this.balkaryaRemainingDeadTime < 0
        ? 0
        : this.balkaryaRemainingDeadTime) / 1000;

    this.quiezeRemainingDeadTime =
      this.quieze.lastSlainTimeStamp +
      this.quieze.respawnDuration * 1000 -
      currentTime;
    this.quiezeRemainingDeadTime =
      (this.quiezeRemainingDeadTime < 0 ? 0 : this.quiezeRemainingDeadTime) /
      1000;

    this.beagridRemainingDeadTime =
      this.beagrid.lastSlainTimeStamp +
      this.beagrid.respawnDuration * 1000 -
      currentTime;
    this.beagridRemainingDeadTime =
      (this.beagridRemainingDeadTime < 0 ? 0 : this.beagridRemainingDeadTime) /
      1000;

    this.northRemainingDeadTime =
      this.north.lastSlainTimeStamp +
      this.north.respawnDuration * 1000 -
      currentTime;
    this.northRemainingDeadTime =
      (this.northRemainingDeadTime < 0 ? 0 : this.northRemainingDeadTime) /
      1000;

    this.eastRemainingDeadTime =
      this.east.lastSlainTimeStamp +
      this.east.respawnDuration * 1000 -
      currentTime;
    this.eastRemainingDeadTime =
      (this.eastRemainingDeadTime < 0 ? 0 : this.eastRemainingDeadTime) / 1000;

    this.southRemainingDeadTime =
      this.south.lastSlainTimeStamp +
      this.south.respawnDuration * 1000 -
      currentTime;
    this.southRemainingDeadTime =
      (this.southRemainingDeadTime < 0 ? 0 : this.southRemainingDeadTime) /
      1000;

    this.westRemainingDeadTime =
      this.west.lastSlainTimeStamp +
      this.west.respawnDuration * 1000 -
      currentTime;
    this.westRemainingDeadTime =
      (this.westRemainingDeadTime < 0 ? 0 : this.westRemainingDeadTime) / 1000;

    this.drakeRemainingDeadTime =
      this.drake.lastSlainTimeStamp +
      this.drake.respawnDuration * 1000 -
      currentTime;
    this.drakeRemainingDeadTime =
      (this.drakeRemainingDeadTime < 0 ? 0 : this.drakeRemainingDeadTime) /
      1000;

    this.queenRemainingDeadTime =
      this.queen.lastSlainTimeStamp +
      this.queen.respawnDuration * 1000 -
      currentTime;
    this.queenRemainingDeadTime =
      (this.queenRemainingDeadTime < 0 ? 0 : this.queenRemainingDeadTime) /
      1000;

    this.mouleRemainingDeadTime =
      this.moule.lastSlainTimeStamp +
      this.moule.respawnDuration * 1000 -
      currentTime;
    this.mouleRemainingDeadTime =
      (this.mouleRemainingDeadTime < 0 ? 0 : this.mouleRemainingDeadTime) /
      1000;
  }

  ///////////////////////////////////////

  resetBossS1() {
    log.info('resetBossS1() call');
    firebase
      .database()
      .ref(bossesPath + 'S1')
      .set({
        id: 1,
        name: 'S1',
        respawnDuration: 86400,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossS2() {
    log.info('resetBossS2() call');
    firebase
      .database()
      .ref(bossesPath + 'S2')
      .set({
        id: 1,
        name: 'S2',
        respawnDuration: 43200,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossTuran() {
    log.info('resetBossTuran() call');
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

  resetBossBarsha() {
    log.info('resetBossBarsha() call');
    firebase
      .database()
      .ref(bossesPath + 'Barsha')
      .set({
        id: 1,
        name: 'Barsha',
        respawnDuration: 10800,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossBalkarya() {
    log.info('resetBossBalkarya() call');
    firebase
      .database()
      .ref(bossesPath + 'Balkarya')
      .set({
        id: 1,
        name: 'Balkarya',
        respawnDuration: 10800,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossQuieze() {
    log.info('resetBossQuieze() call');
    firebase
      .database()
      .ref(bossesPath + 'Quieze')
      .set({
        id: 1,
        name: 'Quieze',
        respawnDuration: 10800,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossBeagrid() {
    log.info('resetBossBeagrid() call');
    firebase
      .database()
      .ref(bossesPath + 'Beagrid')
      .set({
        id: 1,
        name: 'Beagrid',
        respawnDuration: 10800,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  ///////////////////////////////////////

  resetBossNorth() {
    log.info('resetBossNorth() call');
    firebase
      .database()
      .ref(bossesPath + 'North')
      .set({
        id: 1,
        name: 'North',
        respawnDuration: 3600,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossEast() {
    log.info('resetBossEast() call');
    firebase
      .database()
      .ref(bossesPath + 'East')
      .set({
        id: 1,
        name: 'East',
        respawnDuration: 86400,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossSouth() {
    log.info('resetBossSouth() call');
    firebase
      .database()
      .ref(bossesPath + 'South')
      .set({
        id: 1,
        name: 'South',
        respawnDuration: 86400,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossWest() {
    log.info('resetBossWest() call');
    firebase
      .database()
      .ref(bossesPath + 'West')
      .set({
        id: 1,
        name: 'West',
        respawnDuration: 86400,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  ///////////////////////////////////////

  resetBossDrake() {
    log.info('resetBossDrake() call');
    firebase
      .database()
      .ref(bossesPath + 'Drake')
      .set({
        id: 1,
        name: 'Drake',
        respawnDuration: 604800,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossQueen() {
    log.info('resetBossQueen() call');
    firebase
      .database()
      .ref(bossesPath + 'Queen')
      .set({
        id: 1,
        name: 'Queen',
        respawnDuration: 86400,
        lastSlainTimeStamp: new Date().getTime()
      });
  }

  resetBossMoule() {
    log.info('resetBossMoule() call');
    firebase
      .database()
      .ref(bossesPath + 'Moule')
      .set({
        id: 1,
        name: 'Moule',
        respawnDuration: 86400,
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
