import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcasedemo',
  templateUrl: './switchcasedemo.component.html',
  styleUrls: ['./switchcasedemo.component.css']
})
export class SwitchcasedemoComponent implements OnInit {

  value: number = 0;

  nextChoice() {
    this.value++;
  }

  constructor() { }

  ngOnInit() {
  }

}
