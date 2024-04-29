import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorCanActivate } from '../doctor/guard/doctor-canAcativate.guard';
import { StudentCanActivate } from '../student/gaurd/student-canActivate.guard';

const  routes:Routes = [
  {path:'student',loadChildren:()=>import('../student/student.module').then(x =>x.StudentModule),canActivate:[StudentCanActivate]},
  {path:'doctor',loadChildren:()=>import('../doctor/doctor.module').then(x =>x.DoctorModule),canActivate:[DoctorCanActivate]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class MainRoutingModule { }
