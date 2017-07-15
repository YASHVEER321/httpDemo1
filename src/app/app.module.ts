import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { apiComponent } from './app.getapidata';

@NgModule({
  declarations: [
    AppComponent,apiComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
