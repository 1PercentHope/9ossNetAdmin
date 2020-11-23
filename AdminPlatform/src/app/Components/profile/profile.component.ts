import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../Service/admins.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  admin: any;
  constructor(private router: Router, private adminsService: AdminsService) { }

  ngOnInit(): void {
    if(window.localStorage.getItem('token') === null){
      this.router.navigate(['home'])
    }
  }
  logOut(){
    // this.adminsService.closeSession(this.admin).subscribe(closed=>{
    //   console.log('successfully logged out!')
    // })
    window.localStorage.removeItem('token');
  }
}
