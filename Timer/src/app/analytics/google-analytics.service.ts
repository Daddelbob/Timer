import { Injectable } from '@angular/core';

@Injectable()
export class GoogleAnalyticsService {
  constructor() {}

  // FOR GOOGLE ANALYTICS
  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategory',
      eventLabel: 'sendEvent',
      eventAction: 'event',
      eventValue: 1
    });
  };

  toggleNightMode = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleNightMode',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  toggleStartStop = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleStartStop',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  toggleCountingUpDown = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleCountingUpDown',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  toggleReset = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleReset',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  playAlarm = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'processHappens',
      eventLabel: 'playAlarm',
      eventAction: 'playAlarm' + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  clearInput = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'clearInput',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  setHours = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'setHours',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  setMinutes = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'setMinutes',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  setSeconds = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'setSeconds',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };

  selectAlarm = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'selectAlarm',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 10
    });
  };
}
