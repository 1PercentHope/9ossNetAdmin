import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../Service/admins.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newAdmin: any;
  registerForm;
  // urllink: string= "pictures/1";

  constructor(private router: Router,private adminsService: AdminsService,private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
   }

  ngOnInit(): void {
    if (window.localStorage.getItem('token') === null) {
      this.router.navigate(['home'])
    }
  }
  onSubmit(adminInfo: any){
    console.log(adminInfo)
    const admin = {email: adminInfo.email, password: adminInfo.password}
    this.adminsService.addAdmin(admin).subscribe(admin=>{
      console.log(admin)
    })
  }
  // selectFiles(event:any){
  //   if(event.target.files){
  //     var reader = new FileReader()
  //     reader.readAsDataURL(event.target.files[0])
  //     reader.onload = (event: any) =>{
  //       this.urllink = event.target.result
  //     }
  //   }
  // }


}
