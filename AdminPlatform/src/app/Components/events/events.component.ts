import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { UploadService } from '../../Service/upload.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [UploadService]
})
export class EventsComponent implements OnInit {
  title = 'angular-cloudinary';
  events: any;
  eventsForm: any;
  eventForm: any;
  a: any;
  imgEncode: any;
  files: File[] = [];
  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder, private uploadService: UploadService) {
  
    this.eventsForm = this.formBuilder.group({
      eventId: '',
      eventHome: '',
      eventAway: '',
      eventPlace: '',
      eventCategory: '',
      eventDate: '',
      eventDescription: '',
      eventPrice: '',
      image: ''
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
 async onSubmitUpdate(updates: any) {
    await this.uploadService.uploadImage(this.eventsForm.image).subscribe(img=>{
    let event = { id: updates.id,image: img.url, homeTeam: updates.eventHome, awayTeam: updates.eventAway, place: updates.eventPlace, date: updates.eventDate, category: updates.eventCategory, description: updates.eventDescription, price: updates.eventPrice }
    this.dataService.updateEvent(event).subscribe(res => {
      console.log('event is updated!')
    })
  })
  }
  deleteAll() {
    this.dataService.deleteAllEvents().subscribe(res => {
      console.log('Events list is empty!')
    })
  }
 async onSubmit(add: any) {
   console.log('start')
   await this.uploadService.uploadImage(this.eventForm.image).subscribe(img=>{
     console.log(img)
      const event = {image: img.url, homeTeam: add.home, awayTeam: add.away, place : add.place, category: add.category, date: add.date, description: add.description, price: add.price }
      this.dataService.addEvent(event).subscribe((events: any) => {
        console.log(events)
      })
    })

  }
  onSelect(event:any) {
    const file_data = event.target.files[0];
    const data = new FormData();
     data.append('file', file_data);
     data.append('upload_preset', 'angular_cloudinary');
     data.append('cloud_name', 'codexmaker');
    this.eventForm.image = data;
  }

  // onRemove(event:any) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }
  onSelectUpdate(event:any){
    const file = event.target.files[0];
    const newData = new FormData();
    newData.append('file', file);
    newData.append('upload_preset', 'angular_cloudinary');
    newData.append('cloud_name', 'codexmaker');
    this.eventsForm.image = newData;
  }
  onUpload() {
    if (!this.files[0]) {
      alert('Please choose an image');
    }
  }
}
