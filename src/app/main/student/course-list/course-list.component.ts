import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../doctor/service/course.service';
import { StudentService } from '../service/student.service';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from 'src/app/Core/model/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  courses!:CourseModel[];

constructor(private studentServ:StudentService,private route:ActivatedRoute){}

ngOnInit(): void {
  let id = this.route.snapshot.params['id']; 

  this.studentServ.GetAllCoursesForDoctor(id).subscribe(data=>{
    if(data.value)
      this.courses=data.value;
    console.log(data);
  })
}

}
