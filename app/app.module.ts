import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
@NgModule({
  declarations:[AppComponent,ChildComponent, Child2Component],
  imports:[BrowserModule,FormsModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{
  constructor(){
    console.log("App Module Loaded...");
  }

}