import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  //template:`<h1> This is Angular</h1>`
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
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
  takeInput(event):void{
    this.msg = event.target.value;
  }
  doClick():void{
    this.cssclass = this.cssclass =='green'?'red':'green';
    this.isDisabled = !this.isDisabled;
  }
}