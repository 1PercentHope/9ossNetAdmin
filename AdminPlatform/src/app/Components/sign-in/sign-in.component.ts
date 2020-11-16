import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/Service/admins.service';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm;
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
      console.log(adminInfo)
    }
}
