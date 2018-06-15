import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
  private data= [
    {_id: 1, Farm: 'Natural Prairie', produce:['lettuce', 'tomatoe']}, 
    {_id: 2, Farm: 'Natural Prairie 2', produce:['lettuce 2', 'potatoe']}, 
    {_id: 3, Farm: 'Natural Prairie 3', produce:['lettuce 3', 'apple']}, 
    {_id: 4, Farm: 'Natural Prairie 4', produce:['lettuce 4', 'banana']},
    {_id: 5, Farm: 'Natural Prairie 5', produce:['lettuce 5', 'mangoe']}
  ];
  getData() {
    return this.data;
  }

}
