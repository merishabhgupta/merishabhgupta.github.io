import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pause-counter',
  templateUrl: './start-pause-counter.component.html',
  styleUrls: ['./start-pause-counter.component.css']
})
export class StartPauseCounterComponent implements OnInit, OnChanges {
  @Input() trackClick;
  trackClickArray: Array<string> = [];
  startCount: number;
  pauseCount: number;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.trackClick !== 'reset') {
      this.trackClickArray.push(this.trackClick);
    } else {
      this.trackClickArray = [];
    }
    this.startCount = this.trackClickArray.filter(val => val === 'start').length;
    this.pauseCount = this.trackClickArray.filter(val => val === 'pause').length;
  }


}
