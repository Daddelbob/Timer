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
      eventValue: 5
    });
  };

  toggleStartStop = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleStartStop',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 3
    });
  };

  toggleCountingUpDown = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleCountingUpDown',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 2
    });
  };

  toggleReset = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleReset',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 2
    });
  };

  playAlarm = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'processHappens',
      eventLabel: 'playAlarm',
      eventAction: 'playAlarm' + ' --- ' + new Date().toString(),
      eventValue: 2
    });
  };

  clearInput = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'clearInput',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 2
    });
  };

  setHours = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'setHours',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 5
    });
  };

  setMinutes = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'setMinutes',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 5
    });
  };

  setSeconds = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'setSeconds',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 5
    });
  };

  selectAlarm = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'selectAlarm',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 1
    });
  };

  toggleLapSeconds = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleLapSeconds',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 1
    });
  };

  toggleUseLapSeconds = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleUseLapSeconds',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 1
    });
  };

  setLapSeconds = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'setLapSeconds',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 1
    });
  };

  openLaghaimMode = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'openLaghaimMode',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 5
    });
  };

  openNormalMode = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'openNormalMode',
      eventAction: event + ' --- ' + new Date().toString(),
      eventValue: 5
    });
  };
}
