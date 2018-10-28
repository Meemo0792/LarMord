import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {
  submitted:boolean=false;
  isAuthenticated:boolean;
  userName:string;
  onSubmit(name:string,password:string){
    this.submitted=true;
    if(name==="admin" && password==="admin")
    {
      this.isAuthenticated=true;
    }
    else
    {
      this.isAuthenticated=false;
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
