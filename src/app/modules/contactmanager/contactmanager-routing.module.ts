import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerAppComponent } from './components/contact-manager-app/contact-manager-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const contactRoutes: Routes = [
    {path: '', component: ContactManagerAppComponent,
    children: [
        {path: '', component: MainContentComponent }
    ]},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [ RouterModule.forChild(contactRoutes) ],
    exports: [ RouterModule ]
})
export class ContactmanagerRoutingModule { }
