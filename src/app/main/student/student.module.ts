import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { StudentRoutingModule } from './student-routing/student-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { QRCodeModule } from 'angularx-qrcode';
import { ScannerPageComponent } from './scanner-page/scanner-page.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { SafePipe } from './scanner-page/safe.pipe';
import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  declarations: [
    DoctorListComponent,
    CourseListComponent,
    CourseViewComponent,
    ScannerPageComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    YouTubePlayerModule,
    QRCodeModule,
    NgxScannerQrcodeModule,
    ZXingScannerModule
  ]
})
export class StudentModule { }
