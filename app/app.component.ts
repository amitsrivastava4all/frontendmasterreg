import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  //template:`<h1> This is Angular</h1>`
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  msg:string;
  cssclass:string ='green';
  isDisabled:boolean = true;
  constructor(){
    this.msg = 'Hello Angular';
  }
  takeInput(event):void{
    this.msg = event.target.value;
  }
  doClick():void{
    this.cssclass = this.cssclass =='green'?'red':'green';
    this.isDisabled = !this.isDisabled;
  }
}