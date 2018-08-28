import {
  Component,
  HostBinding,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { MediaMatcher } from '../../../node_modules/@angular/cdk/layout';
import { Log } from 'ng2-logger/client';
import { GoogleAnalyticsService } from '../analytics/google-analytics.service';
import * as firebase from 'firebase';

const basePath = '../../assets/audio/';
const extension = '.mp3';
const log = Log.create('Component: StartComponent');
log.color = 'blue';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnDestroy {
  @HostBinding('class.indigo-pink')
  lightTheme = true;
  @HostBinding('class.indigo-pink-dark')
  darkTheme = false;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  public hours: number = null;
  public minutes: number = null;
  public seconds: number = null;
  public disableStart = true;

  public startStop = 'start';
  public countingDownMode = false;
  public panelOpenState = false;
  public selectedCountMode = 'countUp';
  public selectedTotalSeconds = 0;
  public countedTotalSeconds = 0;
  public theme = 'Light';

  public lapSeconds = 0;
  public useLapSeconds = false;

  public chosenAlarmSound = 'bed-alarm';
  public chosenAlarm = new Audio(basePath + this.chosenAlarmSound + extension);

  timer: any;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    public ga: GoogleAnalyticsService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    // console.log(firebase.app().name);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /**
   * If the selected lap time is not reached yet, the Ticker will add another second to the currentCountedSeconds.
   * If the selected lap time is reached, the Ticker will cancel the Timer.
   */
  tick() {
    const self = this;
    this.countedTotalSeconds++;
    if (this.countedTotalSeconds >= this.selectedTotalSeconds) {
      clearInterval(this.timer);
      this.startStop = 'start';
      if (this.useLapSeconds) {
        setTimeout(function() {
          self.toggleStartStop();
        }, this.lapSeconds * 1000);
      }
      this.playAlarm();
    }
    log.data('', this.countedTotalSeconds);
  }

  /**
   * Sets the options start / pause / continue depending on a running Ticker and total Input not zero
   */
  toggleStartStop() {
    log.info('toggleStartStop() call');
    if (this.startStop === 'start' && this.selectedTotalSeconds !== 0) {
      // start & restart
      log.data('selectedTotalSeconds', this.selectedTotalSeconds);
      this.countedTotalSeconds = 0;
      this.timer = setInterval(() => this.tick(), 1000);
      this.startStop = 'pause';
    } else if (
      this.startStop === 'continue' &&
      this.selectedTotalSeconds !== 0
    ) {
      // continue
      log.data('selectedTotalSeconds', this.selectedTotalSeconds);
      this.timer = setInterval(() => this.tick(), 1000);
      this.startStop = 'pause';
    } else if (this.startStop === 'pause') {
      // continue
      clearInterval(this.timer);
      this.startStop = 'continue';
    }
  }

  /**
   * Clears the input fields and resets the Count.
   */
  clearInput() {
    log.info('clearInput() call');
    this.hours = this.minutes = this.seconds = null;
    this.disableStart = true;
    this.selectedTotalSeconds = 0;
    this.resetCount();
  }

  /**
   * Resets the currentCountedSeconds to zero, clears the Ticker and refreshes the options to restart the Timer
   */
  resetCount() {
    log.info('resetCount() call');
    this.countedTotalSeconds = 0;
    clearInterval(this.timer);
    this.startStop = 'start';
  }

  /**
   * Calculates the input Hours, Minutes and Seconds to the actual Time for a lap.
   * For example: inputted "1 hour, 62 minutes and 121 seconds" reslut in calculated "2 hours, 3 minutes and 1 second".
   * Furthermore the total hours, minutes and seconds are cummulated to total-Seconds
   * which are used by the DOM pipe to display the ISOString.
   *
   * If there is no input at all, the start-option is disabled.
   */
  calcTotalSeconds() {
    log.info('calcTotalSeconds() call');
    this.resetCount();
    if (this.hours < 0) {
      this.hours = 0;
    }
    if (this.minutes < 0) {
      this.minutes = 0;
    }
    if (this.seconds < 0) {
      this.seconds = 0;
    }

    this.selectedTotalSeconds =
      this.hours * 3600 + this.minutes * 60 + this.seconds * 1;

    let remainingSplittedSeconds = this.selectedTotalSeconds;
    this.hours = Math.floor(remainingSplittedSeconds / 3600);
    remainingSplittedSeconds -= this.hours * 3600;
    this.minutes = Math.floor(remainingSplittedSeconds / 60);
    remainingSplittedSeconds -= this.minutes * 60;
    this.seconds = remainingSplittedSeconds;

    if (this.selectedTotalSeconds === 0) {
      this.hours = this.minutes = this.seconds = null;
      this.disableStart = true;
    } else {
      this.disableStart = false;
    }
  }

  /**
   * Toggles Night- and Day-Mode to provide a more enjoyable view.
   */
  toggleNightMode() {
    log.info('toggleNightMode() call');
    if (this.theme === 'Light') {
      this.lightTheme = false;
      this.darkTheme = true;
      this.theme = 'Dark';
    } else {
      this.darkTheme = false;
      this.lightTheme = true;
      this.theme = 'Light';
    }
  }

  toggleCountingUpDown() {
    log.info('toggleCountingDown() call');
    this.countingDownMode = !this.countingDownMode;
  }

  selectAlarm(alarm: string) {
    log.info('selectAlarm() call');
    const path: string = '' + basePath + alarm + extension;
    this.chosenAlarm = new Audio(path);
    this.chosenAlarm.load();
  }

  playAlarm() {
    this.ga.playAlarm();
    this.chosenAlarm.play();
  }
}
