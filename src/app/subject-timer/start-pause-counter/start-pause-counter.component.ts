import { Component, OnInit } from '@angular/core';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-start-pause-counter',
  templateUrl: './start-pause-counter.component.html',
  styleUrls: ['./start-pause-counter.component.css']
})
export class StartPauseCounterComponent implements OnInit {
  trackClickArray: Array<string> = [];
  startCount: number;
  pauseCount: number;

  constructor(private service: SubjectTimerService) { }

  ngOnInit() {
    this.service.trackClick.subscribe(clickStatus => {
      if (clickStatus !== 'reset') {
        this.trackClickArray.push(clickStatus);
      } else {
        this.trackClickArray = [];
      }
      this.startCount = this.trackClickArray.filter(val => val === 'start').length;
      this.pauseCount = this.trackClickArray.filter(val => val === 'pause').length;
    });
  }
}