import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoTimerComponent } from './io-timer.component';

describe('IoTimerComponent', () => {
  let component: IoTimerComponent;
  let fixture: ComponentFixture<IoTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
