import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminchildComponent } from './adminchild/adminchild.component';



@NgModule({
  declarations: [AdminchildComponent],
  imports: [
    CommonModule
  ],
  exports:[AdminchildComponent]
})
export class AdminModule { }
