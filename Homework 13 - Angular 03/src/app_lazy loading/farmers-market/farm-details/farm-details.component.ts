import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DbService } from '../db.service';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.css']
})
export class FarmDetailsComponent implements OnInit {
    // Read Route parameters from ActivateRoute
  // We will use Observable as wrapper to subscribe to param changes
  private subscription: Subscription;
  id: number;
  //onetimeId: string;
  farmDetail;

  constructor(private activatedRoute: ActivatedRoute,private dataService: DbService) {
    // params will return an Observable
    // we need it so we track changes in parameters as this code will be run once at constructor
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
    // constructor will be used once
    //this.onetimeId = activatedRoute.snapshot.params['id']
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    //console.log(this.dataService.getData());
    //console.log(this.id);
    this.farmDetail = this.dataService.getData().find(x => x._id == this.id); 
    
    //console.log(this.farmDetail);
  }

}
