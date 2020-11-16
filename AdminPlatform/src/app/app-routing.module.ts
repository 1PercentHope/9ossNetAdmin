import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { profile } from 'console';
import { HomeComponent } from './Components/home/home.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [ { path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: 'home', component: HomeComponent },
{ path: 'signin', component: SignInComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'newadmin' , component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
