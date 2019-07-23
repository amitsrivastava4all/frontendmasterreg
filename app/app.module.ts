import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  declarations:[AppComponent],
  imports:[BrowserModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{
  constructor(){
    console.log("App Module Loaded...");
  }

}