import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public time = 0;
  public countingUp = true;
  public selectedCountMode = 'countDown';
  public selectedTotalSeconds = 5;

  public nightMode = false;
  public minBrightness = 1;
  public maxBrightness = 255;
  public brightnessStep = 1;
  public selectedBrightness = 200;

  timer: any;
  constructor() {}

  ngOnInit() {}

  tick() {
    console.log(this.selectedBrightness);
    if (this.time < this.selectedTotalSeconds) {
      this.time++;
    } else {
      clearInterval(this.timer);
    }
    console.log('hi', this.time);
  }

  start() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  setHours() {}
  setMinutes() {}
  setSeconds() {}

  toggleNightMode() {
    // const color = document.getElementById('mydiv').style.color;
    // const backgroundColor = document.getElementById('mydiv').style
    //   .backgroundColor;
    // if (color === 'black' && backgroundColor === 'white') {
    //   document.getElementById('mydiv').style.color = 'white';
    //   document.getElementById('mydiv').style.backgroundColor = 'black';
    // } else {
    //   document.getElementById('mydiv').style.color = 'black';
    //   document.getElementById('mydiv').style.backgroundColor = 'white';
    // }
  }

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
