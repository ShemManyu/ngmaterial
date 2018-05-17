import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerAppComponent } from './components/contact-manager-app/contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { ContactmanagerRoutingModule } from './contactmanager-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MymaterialModule } from '../mymaterial/mymaterial.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MymaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContactmanagerRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  providers: [
    UserService
  ]
})
export class ContactmanagerModule { }
