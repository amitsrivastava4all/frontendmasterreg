import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string;
  job:string;
  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(obj=>{
      this.name = obj['name'];
      this.job = obj['job'];
    })
  }

}
