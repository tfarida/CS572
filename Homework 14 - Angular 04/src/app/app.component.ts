import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <app-my-ddcomponent> </app-my-ddcomponent>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}