import { CanActivate, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BackEnd } from './backend.service';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Injectable()
export class MyGuard implements CanActivate{
    constructor(private backEnd:BackEnd, private route:Router){

    }
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
       //return false;
       
                
       return Observable.create((obs)=>{
           this.backEnd.allowOrNotAllowGuard().subscribe(data=>{
            if(data == true){  
                obs.next(data);
            }
            else{
                this.route.navigate(['/error']);
            }
           })
       });
        // this.backEnd.allowOrNotAllowGuard().subscribe(data=>{
        //     console.log("Subscribe Called... ",data);
        //     if(data==true){
        //         console.log("Return TRUE.......");
        //        // this.route.navigate(['/news']);
        //         return true;
        //     }
        //     else{
        //         this.route.navigate(['/error']);
        //         return false;
        //     }
        // });
    }
    
}