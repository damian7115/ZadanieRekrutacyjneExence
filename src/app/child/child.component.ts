import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //wartosc przesylana od9* rodzica//
  @Input() 
  fromParent;  

  constructor() { }

  ngOnInit() {
  }

}
