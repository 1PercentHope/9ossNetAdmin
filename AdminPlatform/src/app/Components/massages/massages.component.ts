import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Service/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css']
})
export class MassagesComponent implements OnInit {
  messages: any;
  messagesForm: any;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.messagesForm = this.formBuilder.group({
      messagesId: "",
      messagesText: ""
    })
  }

  ngOnInit(): void {
    this.dataService.getMessage().subscribe(messages => {
      this.messages = messages
      console.log(messages)
    })
  }


  onSubmit(adminMessage: any) {
    const message = { text: adminMessage.text }
    this.dataService.addMessage(message).subscribe((messages: any) => {
      console.log(messages)
      if (Object.keys(messages).length) {
        return messages
      }
    })
  }
}
