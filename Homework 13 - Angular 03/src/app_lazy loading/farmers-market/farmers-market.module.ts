import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms/farms.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { Routes, RouterModule } from '@angular/router';
import { DbService } from './db.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FarmDetailGuard } from './farm-detail.guard';

export const MY_ROUTES: Routes = [
  { path: 'farms', component: FarmsComponent },
  { path: 'farm', component: FarmDetailsComponent, canActivate:[FarmDetailGuard]},
   { path: 'farm/:id', component: FarmDetailsComponent, canActivate:[FarmDetailGuard]}
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(MY_ROUTES)
  ],
  declarations: [FarmsComponent, FarmDetailsComponent],
  providers: [DbService, FarmDetailGuard],
  bootstrap: [FarmsComponent]
})
export class FarmersMarketModule { }
