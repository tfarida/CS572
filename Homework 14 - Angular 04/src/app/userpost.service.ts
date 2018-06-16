import { Injectable } from '@angular/core';
//import { HttpClient, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserpostService {

  constructor(private http: HttpClient) { }
  getUserData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1'); //.subscribe((res: Response) => res.json());
  }

  getPostData() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1'); //.map((res: Response) => res.json());
  }

}
