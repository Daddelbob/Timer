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
      eventAction: event,
      eventValue: 10
    });
  };

  toggleStartStop = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleStartStop',
      eventAction: event,
      eventValue: 10
    });
  };

  toggleCountingUpDown = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleCountingUpDown',
      eventAction: event,
      eventValue: 10
    });
  };

  toggleReset = (event: any) => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'buttonClicked',
      eventLabel: 'toggleReset',
      eventAction: event,
      eventValue: 10
    });
  };

  playAlarm = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'processHappens',
      eventLabel: 'playAlarm',
      eventAction: 'playAlarm',
      eventValue: 10
    });
  };
}
