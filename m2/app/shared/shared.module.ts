import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ImagenotfoundPipe} from '../imagenotfound.pipe';

@NgModule({
  declarations: [ImagenotfoundPipe],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports:[
    CommonModule, FormsModule, ReactiveFormsModule,ImagenotfoundPipe
  ]
})
export class SharedModule {
  constructor(){
    console.log('Shared Module Loaded.');
  }
 }
