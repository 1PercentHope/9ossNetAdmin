import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { profile } from 'console';
import { HomeComponent } from './Components/home/home.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { EventsComponent } from './Components/events/events.component';
import { SeatsComponent } from './Components/seats/seats.component';
import { MassagesComponent } from './Components/massages/massages.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'newadmin' , component: SignUpComponent },
  { path: 'events' , component: EventsComponent },
  { path: 'seats' , component: SeatsComponent },
  { path: 'messages' , component: MassagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
