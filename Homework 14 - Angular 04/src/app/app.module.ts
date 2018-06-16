import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';

import { MyDDComponentComponent } from './my-ddcomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThankyouComponent } from './thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
   
    MyDDComponentComponent,
   
    ThankyouComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
