import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MymaterialModule } from './modules/mymaterial/mymaterial.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MymaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
