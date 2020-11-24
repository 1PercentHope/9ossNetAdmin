import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DataService } from './Service/data.service';
import { EventsComponent } from './Components/events/events.component';
import { SeatsComponent } from './Components/seats/seats.component';
import { AdminsService } from './Service/admins.service';
import { HttpClientModule } from '@angular/common/http';
import { MassagesComponent } from './Components/massages/massages.component';
import { UploadService } from './Service/upload.service';
//Ngx lib dropzone
// import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    EventsComponent,
    SeatsComponent,
    MassagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // NgxDropzoneModule
    
  ],
  providers: [DataService, AdminsService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
