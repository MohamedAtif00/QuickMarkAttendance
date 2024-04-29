import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCreationComponent } from './course-creation/course-creation.component';
import { FormsModule } from '@angular/forms';
import { DoctorRoutingModule } from './doctor-routing/doctor-routing.module';
import { CourseViewComponent } from './course-view/course-view.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {QRCodeModule} from 'angularx-qrcode'



@NgModule({
  declarations: [
    CourseCreationComponent,
    CourseViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DoctorRoutingModule,
    QRCodeModule,
    YouTubePlayerModule
  ]
})
export class DoctorModule { }
