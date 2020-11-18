import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../Service/admins.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin: any;
  constructor(private adminsService: AdminsService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.adminsService.closeSession(this.admin).subscribe(closed=>{
      console.log('successfully logged out!')
    })
  }
 
}
