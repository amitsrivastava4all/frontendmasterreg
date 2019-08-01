import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable()
export class BackEnd {
    allowOrNotAllowGuard():Observable<boolean>{
        console.log("Back End Call");
        return Observable.create(obj=>{
            setTimeout(()=>{
                console.log("TimeOut Done...");
                obj.next(false);
            },6000);
        })
    }
}