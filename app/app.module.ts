import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { UserroutesModule } from './userroutes/userroutes.module';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule, HttpClientModule, AdminModule,UserroutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
