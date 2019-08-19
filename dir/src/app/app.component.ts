import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num:number;
  constructor(){
    if(localStorage.num){
      this.num =localStorage.num;
    }
    else{
      this.num = 0;
    }
  }
  add(){
    if(localStorage.num){
      this.num = parseInt(localStorage.num);
      this.num++;
      localStorage.num = this.num;
    }
    else{
      this.num = 0;
      this.num++;
      localStorage.num = this.num;
    }
  }
}
