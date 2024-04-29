import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { AuthService } from 'src/app/authentication/service/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-course-creation',
  templateUrl: './course-creation.component.html',
  styleUrls: ['./course-creation.component.css']
})
export class CourseCreationComponent implements OnInit
{


  course = {
    name: '',
    description: '',
    link: '' // Assuming 'Link' is the intended property name
  };

  constructor(private courseService: CourseService,private authServ:AuthService,private router:Router) {} // Inject course service

  ngOnInit(): void {
     this.authServ.init()
    console.log('userid',this.authServ.user.id);
    
  }


  onSubmit(): void {
    // Validation (optional but recommended)
    if (!this.course.name || !this.course.description || !this.course.link) {
      alert('Please fill in all required fields.');
      return;
    }

    if(this.authServ.user)
    {
      this.courseService.CreateCourse({doctorId:this.authServ.user.id, name:this.course.name, description:this.course.description,link:this.course.link})
        .subscribe(
          (response) => {
            console.log('Course created successfully!', response);
            if(response.value?.id.value){
              let id = response.value.id.value;
  
              this.router.navigate(['main','doctor','course-view',id]);
            }
            // Handle successful creation (e.g., clear form, show success message)
            ///this.course = { name: '', description: '', link: '' }; // Reset form
          },
          (error) => {
            console.error('Error creating course:', error);
            // Handle errors gracefully (e.g., show error message)
            alert('An error occurred while creating the course.');
          }
        );

    }
    // Call service to create course
  }
}
