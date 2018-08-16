import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
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

  timer: any;
  constructor() {}

  ngOnInit() {}

  tick() {
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
  }

  setMinutes() {}
  setSeconds() {}

  calcTotalSeconds(event) {
    console.log('this.hours', this.hours);
    console.log('this.minutes', this.minutes);
    console.log('this.seconds', this.seconds);
    this.selectedTotalSeconds =
      this.hours * 3600 + this.minutes * 60 + this.seconds;
    console.log('this.selectedTotalSeconds', this.selectedTotalSeconds);
  }

  toggleNightMode() {}

  adjusteNightMode(event: any) {
    this.selectedBrightness = event.value;
    document.getElementById('mydiv').style.color = `rgb(${256 -
      this.selectedBrightness}, ${256 - this.selectedBrightness}, ${256 -
      this.selectedBrightness})`;
    document.getElementById('mydiv').style.backgroundColor = `rgb(${
      this.selectedBrightness
    }, ${this.selectedBrightness}, ${this.selectedBrightness})`;
  }
}
