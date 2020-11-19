import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../Service/admins.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newAdmin: any;
  registerForm;
  // urllink: string= "pictures/1";

  constructor(private adminsService: AdminsService,private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
   }

  ngOnInit(): void {
  }
  onSubmit(adminInfo: any){
    console.log(adminInfo)
    const admin = {email: adminInfo.firstName, password: adminInfo.password}
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
