import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myColor]'
})


export class ColorDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    let dom = this.elementRef.nativeElement;
    dom.style.backgroundColor = 'green';
  }
}
