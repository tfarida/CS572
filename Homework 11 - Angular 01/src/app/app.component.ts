import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div class="center">
    <p>Input: <input value="{{ComponentCounterValue}}"  (input)="onInputChange($event)"/> </p>
    <app-counter [counter]="ComponentCounterValue" (counterChange)="showOutputData($event)"></app-counter>
    <p>Component Counter Value =  {{ComponentCounterValue}}</p>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public ComponentCounterValue:number = 0;
  
  showOutputData(data){
    this.ComponentCounterValue = data;
  }
  onInputChange(e){    
    this.ComponentCounterValue = e.target.value;
  }
}
