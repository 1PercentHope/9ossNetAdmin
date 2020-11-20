import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _urlSeats = "http://192.168.22.122:5000/admins/seats";
  private _urlEvents = "http://192.168.22.122:5000/admins/events";
  private _urlMessages = "http://192.168.22.122:5000/admins/messages";
  constructor(private httpClient: HttpClient) { }

  // get all seats
  public getSeats() {
    return this.httpClient.get(this._urlSeats)
  }
  // update one seat
  public updateSeat(info: any) {
    return this.httpClient.put(this._urlSeats + '/update',info)
  }
  // delete one seat
  public deleteSeat(info: any) {
    return this.httpClient.delete(this._urlSeats + '/remove:id',info)
  }
  // delete all seats
  public deleteAllSeats() {
    return this.httpClient.delete(this._urlSeats + '/remove')
  }
  // add new Seats
  public addSeat(info: any) {
    return this.httpClient.post(this._urlSeats + '/add', info)
  }
  ///////////////// Events ////////////////////
  // get all events
  public getevents() {
    return this.httpClient.get(this._urlEvents)
  }
  // update one event
  public updateEvent(info: any) {
    return this.httpClient.put(this._urlEvents + '/update',info)
  }
  // delete one event
  public DeleteEvent(info: any) {
    return this.httpClient.delete(this._urlEvents + '/remove:id',info)
  }
  // delete all events
  public deleteAllEvents() {
    return this.httpClient.delete(this._urlEvents + '/remove')
  }
  // add new event
  public addEvent(info: any) {
    return this.httpClient.post(this._urlEvents + '/add', info)
  }

////////////////////////messages/////////////////////////////
// post message
public addMessage(info: any) {
  return this.httpClient.post(this._urlMessages + '/add', info)
}
// get message
public getMessage() {
  return this.httpClient.get(this._urlMessages)
}
}


