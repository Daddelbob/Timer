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
  timer: any;
  constructor() {}

  ngOnInit() {}

  tick() {
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
}
