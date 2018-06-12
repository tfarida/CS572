import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `    
    <button (click)="onclickMinus()"> - </button> {{counterValue}}
    <button (click)="onclickPlus()"> + </button>    
  `,
  styles: ['button{margin: 5px}']
})
export class CounterComponent implements OnInit {
  public counterValue:number;
  @Input() counter:number;
  @Output() counterChange = new EventEmitter();
  constructor() { 
  }
  onclickMinus(){
    this.counterValue--;
    this.counter = this.counterValue;
    this.emitMessage();
  }

  onclickPlus(){
    this.counterValue++;
    this.counter = this.counterValue;
    this.emitMessage();
  }

  emitMessage() {
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
    //this.counterValue = this.counter;
  }

  ngOnChanges() {
    
    this.counterValue = this.counter;
    
  }
}
