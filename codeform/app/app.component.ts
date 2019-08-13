import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gender:string[] = ["male","female"];
    regiterForm:FormGroup;
  blackListedUsers:string[] = ["tim","kim","rim","sim"];
    ngOnInit(){
        this.regiterForm = new FormGroup({
          'userInfo': new FormGroup({
             'username':new FormControl(null,[Validators.required,this.checkUsers.bind(this)]),
              'email':new FormControl(null,[Validators.required,Validators.email],this.checkUsersAsynch.bind(this))
          })
         ,
          'gender':new FormControl('male'),
          'address':new FormArray([])
        });
    }

   doRegister(){
     console.log("Form Submitted Call ",this.regiterForm);
   }

   addAddress(){
    const addressField = new FormControl(null,Validators.required);
    (<FormArray>this.regiterForm.get('address')).push(addressField);
   }

   checkUsers(control:FormControl):{[key:string]:boolean}{
      if(this.blackListedUsers.indexOf(control.value)!==-1){
        return {'blackListed':true};
      }
      return null;  // if validation is pass , return null
   }

    checkUsersAsynch(control:FormControl):Promise<any>|Observable<any>{
      const promise = new Promise<any>((resolve,reject)=>{
        setTimeout(()=>{
          if(control.value=='tim@yahoo.com'){
            resolve({'emailBlackListed':true});
          }
          else{
            resolve(null);
          }
        },7000);
      })
      return promise;  // if validation is pass , return null
   }
}
