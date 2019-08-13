import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SportsComponent } from '../child/news/sports/sports.component';
import { PoliticsComponent } from '../child/news/politics/politics.component';

const routes: Routes = [
  {
    path:'sports',component:SportsComponent,
},{
  path:'politics',component:PoliticsComponent
}

];
@NgModule({
  declarations: [SportsComponent, PoliticsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LazyroutesModule { 
  constructor(){
    console.log('Lazy Route Module Loaded...');
  }
}
