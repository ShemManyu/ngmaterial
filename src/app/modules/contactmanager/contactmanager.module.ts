import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerAppComponent } from './components/contact-manager-app/contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MymaterialModule } from '../mymaterial/mymaterial.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MymaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContactmanagerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  entryComponents: [
    NewContactDialogComponent
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }
