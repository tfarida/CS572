import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class FarmDetailGuard implements CanActivate {
  constructor(private router: Router,private dataService: DbService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("GUARD");
    console.log(next.params['id']);
    //var id = next.params['id'];
    var farmDetail = this.dataService.getData().find(x => x._id == next.params['id']); 
    if(next.params['id'] == undefined ){        
      this.router.navigate(['/', 'er']);
      //this.router.navigate(['/', 'error']);
      return false;
    }
    else if(farmDetail == undefined){
      //this.router.navigate(['/', 'farm', '1']);
      this.router.navigate(['/', 'er']);
      //this.router.navigate(['/', 'error']);
      return false;
    }
    return true;
  }
}
