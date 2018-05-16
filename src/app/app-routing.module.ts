import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'demo', loadChildren: './modules/demo/demo.module#DemoModule'},
  {path: 'contactmanager', loadChildren: './modules/contactmanager/contactmanager.module#ContactmanagerModule'},
  {path: '**', redirectTo: 'contactmanager'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
