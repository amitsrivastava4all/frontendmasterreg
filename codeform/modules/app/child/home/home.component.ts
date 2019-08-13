import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  save(form:ElementRef){
    console.log("Submit called ",form);
  }
  constructor() { }

  ngOnInit() {
  }

}
