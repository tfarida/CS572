import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-component',
  // templateUrl: './my-component.component.html',
  template: `  
  <ul >
    <li  *ngFor="let item of arrItems" appUpper appMycolor [appMyvisibility]=true (colorChange)="propColorChange($event)"> Hello {{item}}</li>
  </ul>
  <div [appMyvisibility]=true> HELLO from DIV with appMyvisibility</div>
  `,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  @Input()arrItems;
  @Output() colorChange = new EventEmitter();
  selectedColor:string;
  constructor() { }
  propColorChange(val){
    this.selectedColor = val; 
    this.emitMessage();
  }
  emitMessage() {
    this.colorChange.emit(this.selectedColor);
  }

  ngOnInit() {
  }

}
