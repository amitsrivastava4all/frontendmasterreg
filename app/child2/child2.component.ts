import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnDestroy {
  @Input()
  name:string;
  @Input()
  lname:string;
  title:string;
  constructor() { }

   show():void{
    this.title = 'Show Called by Parent';
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    
  }

}
