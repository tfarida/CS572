import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  // template:`{{data[0].Farm}}`,
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  data; 
  constructor(private dataService: DbService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}
