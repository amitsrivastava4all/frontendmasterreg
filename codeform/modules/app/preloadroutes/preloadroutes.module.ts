import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from '../office/office.component';
import { ResComponent } from '../res/res.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path:'office',component:OfficeComponent,
},{
  path:'res',component:ResComponent
}

];
@NgModule({
  declarations: [OfficeComponent, ResComponent],
  imports: [
    CommonModule
  ],
  exports:[RouterModule]
})
export class PreloadroutesModule {
  constructor(){
    console.log('Preloading Module Loaded...');
  }
 }
