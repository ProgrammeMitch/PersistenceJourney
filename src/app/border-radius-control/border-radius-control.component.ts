import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-radius-control',
  templateUrl: './border-radius-control.component.html',
  styleUrls: ['./border-radius-control.component.scss']
})
export class BorderRadiusControlComponent implements OnInit {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;

  constructor() { }

  ngOnInit(): void {
  }

  topLeftValue(evt: any) {
    this.topLeft = evt.target.value;
  }

  topRightValue(evt: any) {
    this.topRight = evt.target.value;
  }

  bottomRightValue(evt: any) {
    this.bottomRight = evt.target.value;
  }

  bottomLeftValue(evt: any) {
    this.bottomLeft = evt.target.value;
  }
}
