import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.css']
})
export class TimeStampsComponent implements OnInit, OnChanges {
  @Input() timeStamp;
  timeStamps: Array<{stamp: Date, status: string}> = [];
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.timeStamp && this.timeStamp.status === 'reset') {
      this.timeStamps = [];
    } else {
      this.timeStamps.push(this.timeStamp);
    }
  }

}
