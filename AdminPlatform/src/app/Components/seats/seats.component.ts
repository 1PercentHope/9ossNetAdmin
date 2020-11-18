import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seats: any;
  seatsForm: any;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { 
    this.seatsForm = this.formBuilder.group({
      seatsId:"",
      seatsNumber:0,
      seatsType:"",
      seatsAvailability: true
    })
  }
  ngOnInit(): void {
    this.dataService.getSeats().subscribe(seats=>{
      this.seats = seats
      console.log(seats)
    })
  }
  updateSeat(updates: any) {
    console.log(updates)
    let seat = {id: updates.seatsId, Number: updates.seatsNumber, type: updates.seatsType, availability: updates.seatsAvailability}
    this.dataService.updateSeat(seat).subscribe(res=>{
      console.log('seat is updated!')
  })
}

  
  deleteAll(){
    this.dataService.deleteAllSeats().subscribe(res=>{
      console.log('Seats list is empty!')
    })
  }
}
