
import { HomeComponent } from '../home/home.component';
import { Route } from '@angular/router';
import { NgtemplateComponent } from '../ngtemplate/ngtemplate.component';

export const routeDefs: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'ngtemplate',
    component: NgtemplateComponent,
    data: { title: 'Home' }
  }
];
