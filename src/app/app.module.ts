import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthguardService}  from './authguard.service';
import { CountPipePipe } from './pipes/count-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CountPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
