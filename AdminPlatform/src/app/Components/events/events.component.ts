import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events: any;
  constructor(private dataService: DataService) { 
this.events = this.dataService.events
  }

  ngOnInit(): void {
  }
updateEvents(){
  
}
}
