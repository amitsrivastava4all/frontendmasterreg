import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  regForm:FormGroup;
  constructor() { }
  add(){
    let control = new FormControl(null,Validators.required);
  (<FormArray>this.regForm.get('exp')).push(control);
  }
  save(){
    console.log("Save ",this.regForm);
  }
  createGroup(){
    return new FormGroup({
      employerName: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    })
  }
  addGroup(){
    (<FormArray>this.regForm.get('mygroup')).push(this.createGroup());
  }
  ngOnInit() {
    this.regForm = new FormGroup({
          'personal':new FormGroup({
            'username':new FormControl(null,Validators.required)
          }),
         'email': new FormControl(null,[Validators.required,Validators.email]) //,
         //'username':new FormControl(null,Validators.required)
         ,'exp':new FormArray([]),
         'mygroup':new FormArray([])
    });
  }

}
