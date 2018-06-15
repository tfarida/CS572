import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { FarmersMarketModule, MY_ROUTES } from './farmers-market/farmers-market.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ErrorComponent } from './error.component';
import { Error2Component } from './error2.component';
//import { FarmsComponent } from './farmers-market/farms/farms.component';

@NgModule({
  declarations: [
    AppComponent,
    //FarmsComponent,
    HomeComponent, 
    ErrorComponent, 
    Error2Component
  ],
  imports: [
    BrowserModule, 
    //FarmersMarketModule, 
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'er', component: ErrorComponent },
      {path: 'er2', component: Error2Component },
      //{path: 'farms', children: MY_ROUTES }
      //{path: 'farms', component: FarmsComponent, loadChildren: './farmers-market/farmers-market.module#FarmersMarketModule' }
      {path: 'farms', loadChildren: './farmers-market/farmers-market.module#FarmersMarketModule' }

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
