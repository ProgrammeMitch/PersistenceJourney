import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinaryConverterComponent } from './binary-conversion/binary-converter.component';
import { BorderRadiusControlComponent } from './border-radius-control/border-radius-control.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: '', component: BinaryConverterComponent},
  { path: 'binary-converter', component: BinaryConverterComponent},
  { path: 'border-radius-control', component: BorderRadiusControlComponent},
  { path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
