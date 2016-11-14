/**
 * Created by sujoy on 11/14/2016.
 */
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {AbcComponent} from "./abc/abc.component";
import {XyzComponent} from "./xyz/xyz.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'abc',  component: AbcComponent },
      { path: 'xyz',  component: XyzComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule { }
