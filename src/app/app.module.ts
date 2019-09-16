import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeacherattendanceComponent } from './teacherattendance/teacherattendance.component';
import { StudentattendanceComponent } from './studentattendance/studentattendance.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import {AuthGuard} from './auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    PagenotfoundComponent,
    TeacherattendanceComponent,
    StudentattendanceComponent,
    StudentregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
