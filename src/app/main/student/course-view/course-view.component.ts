import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import { CourseModel } from 'src/app/Core/model/course.model';
import { CourseService } from '../../doctor/service/course.service';
import { DoctorService } from '../../doctor/service/doctor.service';

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
        this.doctorServ.GetSingleDoctor(data.value.doctorId.value).subscribe(data=>{
          if(data.value)
          this.name = data.value.name 
      })
      })
  }

}
