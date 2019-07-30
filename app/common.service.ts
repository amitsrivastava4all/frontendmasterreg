import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  bs:BehaviorSubject<string>= new BehaviorSubject<string>('');
  constructor() { }
  getSubject():BehaviorSubject<string>{
    return this.bs;
  }
}
