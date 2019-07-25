import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-child',
    templateUrl:'./child.component.html'
})
export class ChildComponent{
  @Output()
   fullname:EventEmitter<string> = new EventEmitter<string>();
    @Input()
    name:string;
    @Input()
  lname:string;
    title:string = 'Child';
    sendIt(){
      this.fullname.emit(this.name+this.lname);
    }
}