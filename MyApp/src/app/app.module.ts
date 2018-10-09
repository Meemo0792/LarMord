import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IfdemoComponent } from './ifdemo/ifdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    IfdemoComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [IfdemoComponent]
})
export class AppModule { }
