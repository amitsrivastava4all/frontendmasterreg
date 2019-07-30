import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  message:string='';
  constructor(private common:CommonService) { }

  ngOnInit() {
      this.common.getSubject().subscribe(data=>this.message = data);
  }

}
