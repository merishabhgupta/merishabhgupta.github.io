import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-timer',
  templateUrl: './subject-timer.component.html',
  styleUrls: ['./subject-timer.component.css']
})
export class SubjectTimerComponent implements OnInit {
  firedTime: number;
  firedStamp;
  trackClick: String;
  constructor() { }

  ngOnInit() {
  }
    
  // onTimerFired(firedTimer: number) {
  //   this.firedTime = firedTimer;    
  // }

  onTimeStamp(firedStamp: {stamp: Date, status: string}) {
    // console.log(firedStamp);
    this.firedStamp = firedStamp;    
  }

  onTrackClick(trackClick: string) {
    this.trackClick = trackClick;
  }
  
}
