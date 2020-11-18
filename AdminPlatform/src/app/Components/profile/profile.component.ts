import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../Service/admins.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private adminsService: AdminsService, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  logout(){
    }
    // request to localhost:......admins/signout
    // delete request (admin.email)
  
}
