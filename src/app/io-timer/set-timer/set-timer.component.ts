import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.css']
})
export class SetTimerComponent implements OnInit {
  @Output() timerFired = new EventEmitter<number>();
  @Output() timeStampEvent = new EventEmitter<{}>();
  @Output() trackClick = new EventEmitter<string>();

  isStarted: boolean = false;
  timerTrack: number = 0;
  interval;
  pausedAt: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  onStartTimer(timerStartFrom) {  
    if (this.timerTrack !== 0) {
      timerStartFrom = this.timerTrack;
    }  
    this.isStarted = !this.isStarted;
    this.interval = setInterval(() => {
      this.timerFired.emit(timerStartFrom);
      timerStartFrom--;
      if (timerStartFrom < 0){
        clearInterval(this.interval);
        this.isStarted = false;
      }
      this.timerTrack = timerStartFrom;
    }, 1000);
    this.timeStampTrack('Started');
    this.trackClick.emit('start');
  }

  onPauseTimer() {
    clearInterval(this.interval);
    this.isStarted = !this.isStarted;
    this.timeStampTrack('Paused');
    this.pausedAt.push(this.timerTrack + 1);
    this.trackClick.emit('pause');
  }

  onResetTimer(){
    clearInterval(this.interval);
    this.isStarted = false;
    this.timerTrack = 0;
    this.timerFired.emit(this.timerTrack);
    this.timeStampEvent.emit({stamp: null, status: 'reset'});
    this.trackClick.emit('reset');
    this.pausedAt = [];
  }

  timeStampTrack(status: string) {
    const currentStamp = new Date();
    const  postObj = {
      stamp: currentStamp,
      status: status
    }
    this.timeStampEvent.emit(postObj);
  }
}
