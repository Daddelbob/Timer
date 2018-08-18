import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public hours = null;
  public minutes = null;
  public seconds = null;
  public time = 0;
  public countingUp = true;
  public selectedCountMode = 'countDown';
  public selectedTotalSeconds = 0;

  public nightMode = false;
  public minBrightness = 1;
  public maxBrightness = 255;
  public brightnessStep = 1;
  public selectedBrightness = 200;

  @HostBinding('class.indigo-pink')
  lightTheme = true;
  @HostBinding('class.indigo-pink-dark')
  darkTheme = false;
  theme = 'Light';

  timer: any;
  constructor() {}

  ngOnInit() {}

  tick() {
    console.log('seconds', this.seconds);
    console.log('minutes', this.minutes);
    console.log('hours', this.hours);
    console.log('selectedTotalSeconds', this.selectedTotalSeconds);
    if (this.time < this.selectedTotalSeconds) {
      this.time++;
    } else {
      clearInterval(this.timer);
    }
    console.log('', this.time);
  }

  start() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  setHours(event) {
    console.log(this.hours);
    this.calcTotalSeconds();
  }

  setMinutes() {
    console.log(this.minutes);
    this.calcTotalSeconds();
  }
  setSeconds() {
    console.log(this.seconds);
    this.calcTotalSeconds();
  }

  calcTotalSeconds() {
    console.log('calcTotalSeconds() call');
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
      // appRoot.setAttribute('class', 'indigo-pink-dark');
    } else {
      this.darkTheme = false;
      this.lightTheme = true;
      this.theme = 'Light';
      // appRoot.setAttribute('class', 'indigo-pink');
    }
  }
}
