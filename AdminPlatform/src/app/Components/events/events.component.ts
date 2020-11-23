import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any;
  eventsForm: any;
  eventForm: any;
  a: any;
  imgEncode: any;
  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) {
    this.eventsForm = this.formBuilder.group({
      eventId: '',
      eventHome: '',
      eventAway: '',
      eventPlace: '',
      eventCategory: '',
      eventDate: '',
      eventDescription: '',
      eventPrice: ''
    });
    this.eventForm = this.formBuilder.group({
      image: '',
      home: '',
      away: '',
      place: '',
      category: '',
      date: '',
      description: '',
      price: ''
    });
  }

  ngOnInit(): void {
    if (window.localStorage.getItem('token') === null) {
      this.router.navigate(['home'])
    } else {
      this.dataService.getevents().subscribe(events => {
        this.events = events
        console.log(events)
      })
    }
  }
  updateEvent(updates: any) {
    console.log(updates)
    let event = { image: this.imgEncode, homeTeam: updates.eventHome, awayTeam: updates.eventAway, place: updates.eventPlace, date: updates.eventDate, category: updates.eventCategory, description: updates.eventDescription, price: updates.eventPrice }
    this.dataService.updateEvent(event).subscribe(res => {
      console.log('event is updated!')
    })
  }
  deleteAll() {
    this.dataService.deleteAllEvents().subscribe(res => {
      console.log('Events list is empty!')
    })
  }
  onSubmit(add: any) {
    const event = { id: add.eventId, eventImage: this.eventForm.image, home: add.eventHome, away: add.eventAway, place : add.eventPlace, category: add.eventCategory, date: add.eventDate, description: add.eventDescription, price: add.eventPrice }
    this.dataService.addEvent(event).subscribe((events: any) => {
      console.log(events)
    })
  }
  fileImg2(e:any){
    const file = e.target.files[0];
    this.previewFile(file)
  }
  previewFile(file: any){
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () =>{
      this.eventForm.image = reader.result
      console.log(this.eventForm.image)
    }
  }
  fileImg(e:any){

  }
}
