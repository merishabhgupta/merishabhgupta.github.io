import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.css']
})
export class FloatingBannerComponent implements OnInit, AfterViewInit {

  @ViewChild('parentDiv', {static: false}) parentDiv: ElementRef;
  private i: number = 0;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit() {  
  }

  ngAfterViewInit() {

    let parentDiv = this.parentDiv.nativeElement;

    for (let i=0; i<7; i++) {
        const innerDiv = this.renderer.createElement('div');
        this.renderer.addClass(innerDiv, 'rectangle');
        if (i === 6) {
          const b = this.renderer.createElement('b');
          b.innerText = 'Angular Training Assignment';
          this.renderer.addClass(b, 'rotatingText');
          this.renderer.appendChild(innerDiv, b);
          // const marquee = this.renderer.createElement('marquee');
          // marquee.innerText = 'Angular Training Assignment';
          // this.renderer.appendChild(innerDiv,marquee);
        }
        this.renderer.appendChild(parentDiv, innerDiv);
        parentDiv = innerDiv;
    }
  }


}
