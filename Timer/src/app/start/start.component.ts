import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { MediaMatcher } from '../../../node_modules/@angular/cdk/layout';
import { Log } from 'ng2-logger/client';

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

  public hours = null;
  public minutes = null;
  public seconds = null;
  public disableStart = true;

  public startStop = 'start';
  public countingUp = true;
  public panelOpenState = false;
  public selectedCountMode = 'countDown';
  public selectedTotalSeconds = 0;
  public countedTotalSeconds = 0;
  public theme = 'Light';

  timer: any;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /**
   * If the selected lap time is not reached yet, the Ticker will add another second to the currentCountedSeconds.
   * If the selected lap time is reached, the Ticker will cancel the Timer.
   */
  tick() {
    this.countedTotalSeconds++;
    if (this.countedTotalSeconds >= this.selectedTotalSeconds) {
      clearInterval(this.timer);
      this.startStop = 'start';
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
      this.selectedTotalSeconds !== 0 &&
      this.countedTotalSeconds > 0
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
    this.hours = this.minutes = this.seconds = null;
    this.disableStart = true;
    this.resetCount();
  }

  /**
   * Resets the currentCountedSeconds to zero, clears the Ticker and refreshes the options to restart the Timer
   */
  resetCount() {
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
    const remainingFullHours = Math.floor(remainingSplittedSeconds / 3600);
    remainingSplittedSeconds -= remainingFullHours * 3600;
    const remainingFullMinutes = Math.floor(remainingSplittedSeconds / 60);
    remainingSplittedSeconds -= remainingFullMinutes * 60;
    this.hours = remainingFullHours;
    this.minutes = remainingFullMinutes;
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
}
