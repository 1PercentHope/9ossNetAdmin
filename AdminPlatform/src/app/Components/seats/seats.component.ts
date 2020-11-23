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
      seatsNumber: '',
      seatsType:"",
      seatsAvailability: ''
    })
  }
  ngOnInit(): void {
    this.dataService.getSeats().subscribe(seat=>{
      this.seats = seat
      console.log(this.seats)
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
  
  onSubmit(add: any) {
    const seat = { id: add.seatsId, number: add.seatsNumber, type: add.seatsType, availability : add.seatsAvailability}
    this.dataService.addSeat(seat).subscribe((seats: any) => {
      console.log(seats)
    })
  }
}
