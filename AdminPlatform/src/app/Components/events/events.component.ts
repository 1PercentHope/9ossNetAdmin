import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any;
  eventsForm: any;
  a: any;
  imgEncode: any;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
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
  }

  ngOnInit(): void {
    this.dataService.getevents().subscribe(events=>{
      this.events = events
      console.log(events)
    })
  }
  updateEvent(updates: any) {
    console.log(updates)
    let event = {image: this.imgEncode, homeTeam: updates.eventHome, awayTeam: updates.eventAway, place: updates.eventPlace, date: updates.eventDate, category: updates.eventCategory, description: updates.eventDescription, price: updates.eventPrice}
    this.dataService.updateEvent(event).subscribe(res=>{
      console.log('event is updated!')
    })
  }
  deleteAll() {
    this.dataService.deleteAllEvents().subscribe(res=>{
      console.log('Events list is empty!')
    })
  }
  fileImg(event: any){
    const file = event.target.files[0]
    this.previewFile(file)
  }
  previewFile(file: any){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
      this.imgEncode = reader.result
      console.log(this.imgEncode)
    }
  }

}
