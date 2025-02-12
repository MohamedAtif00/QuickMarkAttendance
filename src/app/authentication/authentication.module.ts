import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing/authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';



@NgModule({
  declarations: [
    StudentLoginComponent,
    DoctorLoginComponent,
    AdminLoginComponent,
    RegisterComponent,
    DoctorRegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
