import { Input,HostListener,Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[advanceColor]'
})
export class AdvanceColorDirective implements OnInit {

  @Input() advanceColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseover') 
  onMouseOver() {
 this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.advanceColor);
  }

   @HostListener('click') onClick() {
 this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }
}
