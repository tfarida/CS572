import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input('appMyvisibility') appMyvisibility: boolean; // = true;
  constructor(private e: ElementRef, private r: Renderer2) { 
  }
  ngOnChanges(){
    if(this.appMyvisibility)
      this.r.setStyle(this.e.nativeElement, 'display', 'block');
    else
      this.r.setStyle(this.e.nativeElement, 'display', 'none');
  }

}
