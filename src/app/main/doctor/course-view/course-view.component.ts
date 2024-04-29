import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';
import { DoctorService } from '../service/doctor.service';
import { DomSanitizer } from '@angular/platform-browser';
import{YouTubePlayer} from '@angular/youtube-player'
import { StudentModule } from '../../student/student.module';
import { StudentModel } from 'src/app/Core/model/Student.model';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit{


  course = {
    id:{value:''},
    name: '',
    description: '',
    doctorId:{value:''},
    link:''
  };
  name!:string;
  safUrl:any;

  students!:StudentModel[];

  constructor(private route:ActivatedRoute,private courseServ:CourseService,private doctorServ:DoctorService){}

  ngOnInit(): void {
      let tagscript = document.createElement('script'); 
      tagscript.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tagscript)
      let id = this.route.snapshot.params['id']

      this.courseServ.GetCourse(id).subscribe(data=>{
        if(data.value)
          this.course = data.value;
          console.log(this.course);
          
  
        if(data.value)
        {
          this.doctorServ.GetSingleDoctor(data.value.doctorId.value).subscribe(data=>{

            if(data.value)
            this.name = data.value.name 

            this.courseServ.GetAttendedStudentsForCourse(this.course.id.value).subscribe(data=>{
              if(data.value)
              this.students = data.value;

              console.log(this.students);
              
            })

          })



        }

      })
  }

}
