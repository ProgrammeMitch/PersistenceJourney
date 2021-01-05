import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinaryConverterComponent } from './binary-conversion/binary-converter.component';
import { BorderRadiusControlComponent } from './border-radius-control/border-radius-control.component';

const routes: Routes = [
  { path: '', component: BinaryConverterComponent},
  { path: 'binary-converter', component: BinaryConverterComponent},
  { path: 'border-radius-control', component: BorderRadiusControlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
