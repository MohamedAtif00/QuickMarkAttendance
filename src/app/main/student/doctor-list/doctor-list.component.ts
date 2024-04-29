import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { DoctorModel } from 'src/app/Core/model/doctor.model';



@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit{

  doctors!:DoctorModel[];

  constructor(private studentServ:StudentService){}


  ngOnInit(): void {
    this.studentServ.GetAllDoctors().subscribe(data=>{
      console.log(data);
      if(data.value)
        this.doctors = data.value

    })
  }


}
