import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
seats = [
{id: "00022",
Number: 22,
type: "enceinte sup",
availability: true 
},
{id: "00023",
Number: 23,
type: "enceinte sup",
availability: true 
},
{id: "00024",
Number: 213,
type: "enceinte sup",
availability: false 
}
];
events= [
  {id: 1, homeTeam: 'CA', awayTeam: 'CSS', place: 'Sousse',category: 'CUP' , date: '20/01/2020', description: 'final round' },
  {id: 1, homeTeam: 'UST', awayTeam: 'ESS', place: 'Tunis',category: 'League 1' , date: '20/10/2020', description: 'Round 10' },
  {id: 1, homeTeam: 'CSS', awayTeam: 'EST', place: 'Sfax',category: 'League 1' , date: '2/03/2020', description: 'Round 12' }
]
  private _urlSeats = "http://localhost:5000/admins/seats";
  private _urlEvents = "http://localhost:5000/admins/events"
  
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
  // delete one seat
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
  // delete one event
  public deleteAllEvents() {
    return this.httpClient.delete(this._urlEvents + '/remove')
  }
  // add new event
  public addEvent(info: any) {
    return this.httpClient.post(this._urlEvents + '/add', info)
  }
}

