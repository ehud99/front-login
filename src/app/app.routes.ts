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
        path: 'admin',
        loadComponent: () =>
          import('./Interface/admin/admin').then(m => m.Admin)
      },
      {
        path: ':id/:role',
        loadComponent: () =>
          import('./Interface/usuario/usuario').then(m => m.Usuario),
      }
    ]
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  { path: '**', redirectTo: 'auth/login' }

];
