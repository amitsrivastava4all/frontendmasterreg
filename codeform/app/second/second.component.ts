import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  save(form:ElementRef){
    
    console.log("Submit called ",form);
  }
  constructor() { }

  ngOnInit() {
  }

}
