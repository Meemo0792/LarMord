import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {
  isAuthenticated:boolean;
  submitted:boolean = false;
  userName:string;
  onSubmit(name:string,password:string){
    this.submitted = true;
    this.userName = name;
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
