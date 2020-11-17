import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  private _urlAdmin = "http://localhost:5000/admins";

  constructor(private httpClient: HttpClient) { }
  // signin as an admin
  public getAdmin(info: any) {
    return this.httpClient.post(this._urlAdmin, info)
  }
  // register a new admin
  public addAdmin(info: any) {
    return this.httpClient.post(this._urlAdmin + '/newadmin', info)
  }
  // delete an admin account
  public removeAdmin(info: any) {
    return this.httpClient.delete(this._urlAdmin + '/removeadmin', info)
  }
}
