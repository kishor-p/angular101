import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
