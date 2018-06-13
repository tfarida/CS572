import { Directive, HostBinding,HostListener,ElementRef,Renderer2, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  arrColor = ['red', 'blue','yellow', 'green','black','white'];
  selectedColor:string;
  colorIndex:number;
  @Output() colorChange = new EventEmitter();
  constructor(private e: ElementRef, private r: Renderer2) { }
  @HostBinding('style.backgroundColor') myBG;
  @HostListener('click') click(){ 
    if(this.selectedColor == null){
      this.colorIndex = 0;
    }      
    else{
      if(this.colorIndex < this.arrColor.length-1){
        this.colorIndex++;        
      }
      else{
        this.colorIndex = 0;
      }      
    }
    this.selectedColor = this.arrColor[this.colorIndex];

    //this.e.nativeElement.style.color = this.selectedColor; //'black'; 
    this.myBG = this.selectedColor;
    this.emitMessage();
  }

  emitMessage() {
    this.colorChange.emit(this.selectedColor);
  }

}
