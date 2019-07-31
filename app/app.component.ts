import { Component } from '@angular/core';
import {interval, Observable} from 'rxjs';
import { CommonService } from './common.service';
import { Product } from './models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Product[] = [];
  title = 'rxdemos';
  count:number = 0;
  constructor(private common:CommonService){

  }
  doAjax(start):Observable<any>{
    return Observable.create(obs=>{
      fetch(''+start).then(response=>{
        response.json().then(data=>{
          obs.next(data);
        }).catch(err=>{
          obs.error(err);
        })
      }).catch(e=>obs.error(e)).finally(()=>obs.complete('Done'));
    })
    
  }
  scroll(start){
    var obs = this.doAjax(start);
    obs.subscribe((data)=>console.log('Data is ',data),(e)=>console.log('Error is ',e),()=>console.log('Data Complete '));
  }
  loadProducts(){
   
   let obs:Observable<Product> =this.common.getProducts();
   let obs2 = obs.subscribe((response)=>{
    this.products =  response['mobiles'];
    console.log('All Products are ',this.products);
   },(err)=>{
     console.log('Error is ',err)
   })
  }
  myInterval(time,end):Observable<number>{
    var countDown = 0;
    return Observable.create(obs=>{
      setInterval(()=>{
        countDown++;
        obs.next(countDown);
        if(countDown==end){
          obs.complete();
        }
       // obs.error('Some Error Occur')
      },time);
    });
  }
  show(){
    var obs = this.myInterval(1000,10);
    var sub = obs.subscribe(val=>this.count=val,(err)=>console.log('Error is ',err),()=>console.log('Stream Ends'));
    // var obs = interval(1000);
    // var sub = obs.subscribe(val=>this.count=val,(err)=>console.log('Error is ',err),()=>console.log('Stream Ends'));
    // setTimeout(()=>{
    //   sub.unsubscribe();
    // },10000);
  }
}
