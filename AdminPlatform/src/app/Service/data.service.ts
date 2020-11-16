import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cilent: any;

  constructor(private http: HttpClient) { }
  public create = (data: any)=> {
    return this.http.post('http://localhost:4200/api/admin/signin', data);
  }
  public Check(admin: any) {
    this.cilent = admin;
  }
  public Save() {
    return this.cilent;
  }
}

