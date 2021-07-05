import { Component, OnInit } from '@angular/core';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  timer: number

  constructor(private service: SubjectTimerService) { }

  ngOnInit() {
    this.service.timerFired.subscribe(timerVal => {
      this.timer = timerVal;
    });  
  }
}
