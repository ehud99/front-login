import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Crud {
  private urlBack = environment.urlServiciosBack;
  private _user = JSON.parse(localStorage.getItem("user")!);

  get user(){
    return this._user
  }
  constructor (private httpClient: HttpClient){}

  //pendiente cambiar por la solicitud para leer usuarios
  read() {
    const token = this.user?.token;
    if (!token) throw new Error('No hay token en localStorage');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<any>(`${this.urlBack}/api/v1/admin`, { headers });
  }

  delete(id: string) {
    const token = this.user?.token;
    if (!token) throw new Error('No hay token en localStorage');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    
    return this.httpClient.delete<any>(`${this.urlBack}/api/v1/admin/${id}`, { 
      headers
    });
  }

  update(id: string, value: string){
    const token = this.user?.token;
    if (!token) throw new Error('No hay token en localStorage');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
      
    return this.httpClient.put<any>(`${this.urlBack}/api/v1/admin/${id}`, { role:value } ,{ headers });
  }

 
}
