import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BinaryConverterComponent } from './binary-conversion/binary-converter.component';
import { BorderRadiusControlComponent } from './border-radius-control/border-radius-control.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CauseAndEffectComponent } from './cause-and-effect/cause-and-effect.component';




@NgModule({
  declarations: [
    AppComponent,
    BinaryConverterComponent,
    CalculatorComponent,
    BorderRadiusControlComponent,
    CauseAndEffectComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
