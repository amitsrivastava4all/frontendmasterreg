import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  msg:string = '';
  constructor(private common:CommonService) { }

  ngOnInit() {
  }
  takeInput(event){
    this.msg = event.target.value;
    this.common.getSubject().next(this.msg);
    
  }

}
