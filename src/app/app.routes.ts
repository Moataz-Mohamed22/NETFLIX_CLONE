import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },
];
