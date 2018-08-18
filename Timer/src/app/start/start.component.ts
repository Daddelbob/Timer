import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @HostBinding('class.indigo-pink')
  lightTheme = true;
  @HostBinding('class.indigo-pink-dark')
  darkTheme = false;

  public hours = null;
  public minutes = null;
  public seconds = null;

  public startStop = 'start';
  public countingUp = true;
  public selectedCountMode = 'countDown';
  public selectedTotalSeconds = 0;
  public countedTotalSeconds = 0;

  public nightMode = false;
  public minBrightness = 1;
  public maxBrightness = 255;
  public brightnessStep = 1;
  public selectedBrightness = 200;
  public theme = 'Light';

  timer: any;
  constructor() {}

  ngOnInit() {}

  tick() {
    if (this.countedTotalSeconds < this.selectedTotalSeconds) {
      this.countedTotalSeconds++;
      if (this.countedTotalSeconds === this.selectedTotalSeconds) {
        clearInterval(this.timer);
        this.toggleStartStop();
      }
    } else {
      clearInterval(this.timer);
      this.toggleStartStop();
    }
    console.log('', this.countedTotalSeconds);
  }

  toggleStartStop() {
    console.log('toggleStartStop() call');
    if (this.startStop === 'start' && this.selectedTotalSeconds !== 0) {
      console.log('selectedTotalSeconds', this.selectedTotalSeconds);
      this.timer = setInterval(() => this.tick(), 1000);
      this.startStop = 'stop';
    } else if (this.startStop === 'stop') {
      clearInterval(this.timer);
      this.startStop = 'start';
    }
  }

  resetCount() {
    this.countedTotalSeconds = 0;
    if (this.startStop === 'stop') {
      clearInterval(this.timer);
      this.startStop = 'start';
    }
  }

  calcTotalSeconds() {
    console.log('calcTotalSeconds() call');
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
  }

  toggleNightMode() {
    const appRoot = document.getElementsByTagName('app-root')[0];

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
