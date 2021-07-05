import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-io-timer',
  templateUrl: './io-timer.component.html',
  styleUrls: ['./io-timer.component.css']
})
export class IoTimerComponent implements OnInit {
  firedTime: number;
  firedStamp;
  trackClick: String;
  constructor() { }

  ngOnInit() {
  }
    
  onTimerFired(firedTimer: number) {
    this.firedTime = firedTimer;    
  }

  onTimeStamp(firedStamp: {stamp: Date, status: string}) {
    // console.log(firedStamp);
    this.firedStamp = firedStamp;    
  }

  onTrackClick(trackClick: string) {
    this.trackClick = trackClick;
  }

  
}
