import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private _user: any = null;

  get user(){
    return this._user
  }

  private urlBack = environment.urlServiciosBack;

  constructor (private httpClient: HttpClient){

  }

  register(){

  }

  login(data: any){
    return this.httpClient
    .post<any>(`${this.urlBack}/auth/login`, data)
    .pipe(
      tap((res) => {
        if(res.token){
          this._user = {
          token: res.token
        }
        }else{
          this._user = null;
        }
      }),
      map((res) => !!res.token),
      catchError(err => {
        return of ('credenciales incorrectas');
      })
    )
    
  }

  
}
