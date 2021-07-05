import { Directive, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { Sort } from './sort';


@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any>;
  @Output() resetEvent = new EventEmitter();
  constructor(private targetElem: ElementRef) {
   }

  @HostListener("click")
  sortData() {
    
    const sort = new Sort();
    const elem = this.targetElem.nativeElement;
    
    const order = elem.getAttribute("data-order");
    const property = elem.getAttribute("data-name");
    
    if (order == "default") {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute("data-order", "asc");
    }
    else if ( order == "asc") {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute("data-order", "desc");
    }
    else if (order === "desc") {
      elem.setAttribute("data-order", "default");
      this.resetEvent.emit();
    }
  }
}