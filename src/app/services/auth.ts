import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private urlBack = environment.urlServiciosBack;

  constructor (private httpClient: HttpClient){

  }

  register(){

  }

  login(data: any){
    return this.httpClient
    .post(`${this.urlBack}/auth/login`, data)
    
  }
  
}
