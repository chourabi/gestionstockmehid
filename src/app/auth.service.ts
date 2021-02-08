import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(payload){
    return this.http.post('http://localhost:8080/auth/signin',payload);
  }

  getUserInfo(){
    const token = localStorage.getItem('token');
    return this.http.get('http://localhost:8080/auth/info',{
      headers: new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    })
  }

  getHelloMessage(){
    const token = localStorage.getItem('token');
    return this.http.get('http://localhost:8080/app/employees',{
      headers: new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    })
  }


  getUserRoles(){
    

    const token = localStorage.getItem('token');
    return this.http.get('http://localhost:8080/roles/list/',{
      headers: new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    })
  }
}
