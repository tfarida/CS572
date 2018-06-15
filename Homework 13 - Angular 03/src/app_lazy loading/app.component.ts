import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>App Component</h1>
  <a [routerLink]="['/']">Home</a> &nbsp;   
  <a [routerLink]="['farms']">Farmers Market</a> &nbsp;
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
