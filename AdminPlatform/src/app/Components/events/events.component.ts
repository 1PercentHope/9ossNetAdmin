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
  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder, private _uploadService: UploadService) {
  
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
    const event = { id: add.eventId, data: this.imgEncode, home: add.eventHome, away: add.eventAway, place : add.eventPlace, category: add.eventCategory, date: add.eventDate, description: add.eventDescription, price: add.eventPrice }
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
  onSelect(event:any) {
    const file_data = event.target.files[0];
    const data = new FormData();
     data.append('file', file_data);
     data.append('upload_preset', 'angular_cloudinary');
     data.append('cloud_name', 'codexmaker');
    this.imgEncode = data;
    // this.files.push(...event.target.files);
    // this.onUpload()
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    //Scape empty array
    if (!this.files[0]) {
      alert('Please choose an image');
    }

    //Upload my image to cloudinary
    
    // this._uploadService.uploadImage(data).subscribe((response) => {
    //   if (response) {
    //     console.log(response);
    //   }
    // });
  }
}
