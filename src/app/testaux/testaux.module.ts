import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestauxComponent } from './testaux.component';
import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './xyz/xyz.component';
import {TestRoutingModule} from "./testaux-route.module";

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestauxComponent, AbcComponent, XyzComponent],
  exports:[TestauxComponent]
})
export class TestauxModule { }
