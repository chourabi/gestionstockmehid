import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MagazinService {

  constructor(private http:HttpClient) { }

  getAdmins(){
    const token = localStorage.getItem('token');
    return this.http.get('http://localhost:8080/magazin/admins',{
      headers: new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    })
  }

  getMagazin(){
    const token = localStorage.getItem('token');
    return this.http.get('http://localhost:8080/magazin/list',{
      headers: new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    })
  }

  addMagazin(payload){
    const token = localStorage.getItem('token');
    return this.http.post('http://localhost:8080/magazin/add',payload,{
      headers: new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    })
  }



}
