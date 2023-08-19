import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  getApiListData(){
    return this.http.get(`https://db.ezobooks.in/Kappa/image/task`);
  }
}
