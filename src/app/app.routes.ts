import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',

    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./Auth/login/login').then(m => m.Login)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./Auth/register/register').then(m => m.Register)
      }
    ]
  },

  {
    path: 'sesion',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      {
        path: 'welcome',
        loadComponent: () =>
          import('./Interface/welcome/welcome').then(m => m.Welcome),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./Interface/admin/admin').then(m => m.Admin)
      }
    ]
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  { path: '**', redirectTo: 'auth/login' }

];
