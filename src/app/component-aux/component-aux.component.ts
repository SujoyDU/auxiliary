import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-aux',
  templateUrl: './component-aux.component.html',
  styleUrls: ['./component-aux.component.css']
})
export class ComponentAuxComponent implements OnInit {

  check:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  check(){
    this.check = !this.check;
  }
}
