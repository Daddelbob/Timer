import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public time = 0;
  timer: any;
  constructor() {}

  ngOnInit() {}

  tick() {
    this.time++;
    console.log('hi', this.time);
  }
  start() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  setHours() {}
  setMinutes() {}
  setSeconds() {}
}
