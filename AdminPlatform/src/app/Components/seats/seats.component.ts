import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seats: any;

  constructor(private dataSerice : DataService) { 
    this.seats = this.dataSerice.seats
  }
  ngOnInit(): void {
  }
  updateSeat(){
    
  }
  removeSeat(){

  }
  deleteAll(){
    
  }
}
