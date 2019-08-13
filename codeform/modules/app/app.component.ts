import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
//import { typeWithParameters } from '@angular/compiler/src/render3/util';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  img = '';
  //img  = 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png';
  title = 'moduletypesdemo';
  products:Observable<Product[]>;
  constructor(private http:HttpClient) {
    
   }
   ngOnInit(){
    this.getProducts();
    
   }
  getProducts():Observable<Product[]>{
    console.log('Get Products Called....');
    this.products=   this.http.get<Product[]>('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/products.json');
    return this.products;
  }
}
class Product{
  constructor(public id:number, public name:string, public price:number, public url:string){

  }
}