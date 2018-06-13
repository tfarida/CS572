import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    Current Selected Color: {{currentSelectedColor}}
    <app-my-component [arrItems]="myArray" (colorChange)="showColorChange($event)" >    
    </app-my-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myArray = ['titin', 'farida', 'cantik', 'sekali'];
  currentSelectedColor;
  showColorChange(val){
    this.currentSelectedColor = val;
  }
}
