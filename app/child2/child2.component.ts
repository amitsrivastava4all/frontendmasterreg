import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Common } from '../services/common.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
 // providers:[]
})
export class Child2Component implements OnInit,OnDestroy {
  @Input()
  name:string;
  @Input()
  lname:string;
  title:string;
  
  constructor(private common:Common) { }
  shareIt(event):void{
    this.common.takeInput( event.target.value);

  }
   show():void{
    this.title = 'Show Called by Parent';
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    
  }

}
