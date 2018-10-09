import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  courseName: string = "Angular";
  changeName(){
    this.courseName = "TypeScript";
  }
  constructor() { }

  ngOnInit() {
  }

}
