import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  return authService.validarToken().pipe(
    tap(valid => {
      if (!valid){
        router.navigateByUrl("/auth");
      }
    })
  );
};
