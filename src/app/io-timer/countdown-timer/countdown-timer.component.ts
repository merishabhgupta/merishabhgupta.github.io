import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() timer: number
  constructor() { }

  ngOnInit() {
    
  }

}
