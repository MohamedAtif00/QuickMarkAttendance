import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseViewComponent } from '../course-view/course-view.component';
import { ScannerPageComponent } from '../scanner-page/scanner-page.component';

const routes:Routes = [
  {path:'',component:DoctorListComponent},
  {path:'course-list/:id',component:CourseListComponent},
  {path:'course-view/:id',component:CourseViewComponent},
  {path:'scanner',component:ScannerPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class StudentRoutingModule { }
