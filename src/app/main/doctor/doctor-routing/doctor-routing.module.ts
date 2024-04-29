import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseCreationComponent } from '../course-creation/course-creation.component';
import { CourseViewComponent } from '../course-view/course-view.component';
import { DoctorCanActivate } from '../guard/doctor-canAcativate.guard';

const routes:Routes = [
  {path:'',component:CourseCreationComponent},
  {path:'course-view/:id',component:CourseViewComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class DoctorRoutingModule { }
