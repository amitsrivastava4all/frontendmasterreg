import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './child/home/home.component';
import { AboutComponent } from './child/about/about.component';
import { NewsComponent } from './child/news/news.component';

import { ErrorComponent } from './child/error/error.component';


const routes: Routes = [
   {path:'',component:HomeComponent},
   {path:'about',component:AboutComponent},
   {path:'news',component:NewsComponent},
   {path:'others',loadChildren:'./lazyroutes/lazyroutes.module#LazyroutesModule'},
   {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, AboutComponent, NewsComponent,  ErrorComponent]
})
export class AppRoutingModule {
  constructor(){
    console.log("Routing Module Loaded...");
  }
 }
