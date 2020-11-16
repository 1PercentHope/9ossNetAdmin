import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(
    // private router: Router,
    private dataService: DataService) {}


  ngOnInit(): void {
    const currentAdmin = this.dataService.Save() || {};
    console.log(currentAdmin);
    // if (Object.keys(currentAdmin).length) {
    //   this.router.navigate([currentAdmin]);
    // }
  }

  onSubmit(log: any): void {
    // , pageName: string
    console.log(log);
    const admin = {
      email: log.email,
      password: log.password,
    };
    this.dataService.create(admin).subscribe((res: any) => {
      this.dataService.Check(res);
      // if (Object.keys(res).length) {
      //   this.router.navigate([`${pageName}`]);
      // }
    });
  }
}
