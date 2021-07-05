import { Component, OnInit } from '@angular/core';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.css']
})
export class TimeStampsComponent implements OnInit {

  timeStamps: Array<{stamp: Date, status: string}> = [];

  constructor(private service: SubjectTimerService) { }

  ngOnInit() {
    this.service.timeStampEvent.subscribe(stamp => {
      if (stamp && stamp.status === 'reset') {
        this.timeStamps = [];
      } else {
        this.timeStamps.push(stamp);
      }      
    });
  }
}
