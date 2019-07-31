import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Route, Routes} from '@angular/router';

const routes:Routes = [
  {path:'',component:ContactComponent},
  {path:'news',component:NewsComponent},
  {path:'about',component:AboutComponent}
];
@NgModule({
  declarations: [ContactComponent, AboutComponent, NewsComponent],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class UserroutesModule { }
