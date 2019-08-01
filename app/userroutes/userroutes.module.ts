import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Route, Routes} from '@angular/router';
import { News1Component } from './news/new1.component';
import { News2Component } from './news/news2.component';
import { MyGuard } from '../myguard';
import { BackEnd } from '../backend.service';
import { ErrorComponent } from './error.component';

const routes:Routes = [
  {path:'',component:ContactComponent},
  {path:'error',component:ErrorComponent},
  {path:'news' ,canActivate:[MyGuard],component:NewsComponent,children:[
    {path:'news1',component:News1Component},
    {path:'news2',component:News2Component}
  ]},
  {path:'about/:name/:job',component:AboutComponent}
];
@NgModule({
  declarations: [ContactComponent, AboutComponent, NewsComponent, News1Component,News2Component,ErrorComponent],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  providers:[MyGuard,BackEnd],
  exports:[RouterModule]
})
export class UserroutesModule { }
