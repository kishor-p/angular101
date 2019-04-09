
import { HomeComponent } from '../home/home.component';
import { Route } from '@angular/router';

export const routeDefs: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  }
];
