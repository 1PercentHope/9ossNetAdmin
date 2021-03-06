import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../../Service/admins.service';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm;
  admin: any;
  constructor(private router: Router, private formBuilder: FormBuilder,private adminsService: AdminsService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }


  ngOnInit(): void {
  }

  onSubmit(adminInfo: any) {
      const user = {email: adminInfo.email, password: adminInfo.password}
      this.adminsService.getAdmin(user).subscribe((admin: any)=>{
        if(Object.keys(admin).length){
          window.localStorage.setItem('token', JSON.stringify(admin.token))
          this.router.navigate(['profile'])
        }else{
          alert('Email or password is wrong, please refill with your right informations!')
        }
      })
  }
  handleProfileButton(pageName: string): void {
      this.router.navigate([`${pageName}`]);
  }
}
