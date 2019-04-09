import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { routeDefs } from './_utils/RoutingDefinitions';

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule .forRoot(routeDefs),
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
