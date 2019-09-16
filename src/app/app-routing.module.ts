import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeacherattendanceComponent } from './teacherattendance/teacherattendance.component';
import { StudentattendanceComponent } from './studentattendance/studentattendance.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/registration',pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:SigninComponent},
  {path:'student',component:StudentregistrationComponent},
  {path:'teacherattendance',component:TeacherattendanceComponent,canActivate:[AuthGuard]},
  {path:'studentattendance',component:StudentattendanceComponent},
  {path:'studentregistration',component:StudentregistrationComponent},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent,SigninComponent,HomeComponent,TeacherattendanceComponent,StudentattendanceComponent,StudentregistrationComponent]
