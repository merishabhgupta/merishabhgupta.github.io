import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SubjectTimerService } from '../subject-timer.service';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.css']
})
export class SetTimerComponent implements OnInit {

  isStarted: boolean = false;
  timerTrack: number = 0;
  interval;
  pausedAt: Array<number> = [];

  constructor(private service: SubjectTimerService) { }

  ngOnInit() {
  }

  onStartTimer(timerStartFrom) {  
    if (this.timerTrack !== 0) {
      timerStartFrom = this.timerTrack;
    }  
    this.isStarted = !this.isStarted;
    this.interval = setInterval(() => {
      this.service.timerFired.next(timerStartFrom);
      timerStartFrom--;
      if (timerStartFrom < 0){
        clearInterval(this.interval);
        this.isStarted = false;
      }
      this.timerTrack = timerStartFrom;
    }, 1000);
    this.timeStampTrack('Started');
    this.service.trackClick.next('start');
  }

  onPauseTimer() {
    clearInterval(this.interval);
    this.isStarted = !this.isStarted;
    this.timeStampTrack('Paused');
    this.pausedAt.push(this.timerTrack + 1);
    this.service.trackClick.next('pause');
  }

  onResetTimer(){
    clearInterval(this.interval);
    this.isStarted = false;
    this.timerTrack = 0;
    this.service.timerFired.next(this.timerTrack);
    this.service.timeStampEvent.next({stamp: null, status: 'reset'});
    this.service.trackClick.next('reset');
    this.pausedAt = [];
  }

  timeStampTrack(status: string) {
    const currentStamp = new Date();
    const  postObj = {
      stamp: currentStamp,
      status: status
    }
    this.service.timeStampEvent.next(postObj);
  }
}
