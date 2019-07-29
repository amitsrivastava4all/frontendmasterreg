import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Common } from '../services/common.service';

@Component({
    selector:'app-child',
    templateUrl:'./child.component.html'
})
export class ChildComponent{

  @Output()
   fullname:EventEmitter<string> = new EventEmitter<string>();
    @Input('name')
    name1:string;
    @Input()
  lname:string;
    title:string = 'Child';
    constructor(private common:Common){

    }
    getData():void{
      this.title= this.common.getInput();
    }
    sendIt(){
      this.fullname.emit(this.name1+this.lname);
    }
}