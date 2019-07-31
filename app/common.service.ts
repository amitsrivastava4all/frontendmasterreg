import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Product } from './models/product';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  bs:BehaviorSubject<string>= new BehaviorSubject<string>('');
  constructor(private http:HttpClient) { }
  getSubject():BehaviorSubject<string>{
    return this.bs;
  }
  getProducts():Observable<Product>{
    return this.http.get<Product>('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json');
  }
}
