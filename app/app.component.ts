import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {Child2Component} from './child2/child2.component';
@Component({
  selector:'app-root',
  //template:`<h1> This is Angular</h1>`
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  @ViewChild(Child2Component,{static:false}) child2: Child2Component;
  @ViewChildren(Child2Component)
  child2List:QueryList<Child2Component>;

  salary:number = 21233.98765;
  obj = {id:1001, name:'Ram',salary:9999};
  fruits:string[] = ["Apple","Banana","Orange"];
  msg:string;
  cssclass:string ='green';
  isDisabled:boolean = true;
  result:number = 0;
  constructor(){
    this.msg = 'Hello Angular';
  }
  add(a:string, b:string){
    this.result = parseInt(a) + parseInt(b);
  }
  takeInput2(str):void{
    this.msg = "Take input2 value is "+str;
  }
  takeInput(event):void{
    this.msg = event.target.value;
  }
  getFullName(str){
    this.msg= 'Full Name is '+str;
  }
  doClick(event, price):void{
    //this.child2.show();
    this.child2List.forEach(child=>child.show());
    this.cssclass = this.cssclass =='green'?'red':'green';
    this.isDisabled = !this.isDisabled;
  }
}