import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatCheckboxModule
 } from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  exports:[
    MatCheckboxModule,
    MatButtonModule
  ],
  declarations: []
})
export class MymaterialModule { }
