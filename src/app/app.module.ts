import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BinaryConverterComponent } from './binary-conversion/binary-converter.component';
import { BorderRadiusControlComponent } from './border-radius-control/border-radius-control.component';

@NgModule({
  declarations: [
    AppComponent,
    BinaryConverterComponent,
    BorderRadiusControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
