import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {envro} from '../../../../environment'
import { GeneralResponse } from "src/app/Core/model/general.response";
import { GetAllDoctorsResponse } from "../model/response/get-all-doctors.response";
import { DoctorModel } from "src/app/Core/model/doctor.model";
import { CourseModel } from "src/app/Core/model/course.model";



@Injectable({
    providedIn:'root'
})
export class StudentService{

    getAllDoctors:string = `${envro.localhost}api/Doctor`
    getAllCoursesForDoctor:string = `${envro.localhost}api/Course/GetCoursesForDoctor/`
    getCourse:string = `${envro.localhost}api/Course/GetCourse/`
    postAttendStudent:string = `${envro.localhost}api/Attendance/AddAttendance`

    constructor(private http:HttpClient){}

    GetAllDoctors()
    {   
        return this.http.get<GeneralResponse<DoctorModel[]>>(this.getAllDoctors);
    }
    
    GetAllCoursesForDoctor(id:string)
    {
        return this.http.get<GeneralResponse<CourseModel[]>>(this.getAllCoursesForDoctor+id);
    }

    GetCourse(id:string)
    {
        return this.http.get<GeneralResponse<CourseModel>>(this.getCourse+id);
    }

    AttendStudent(courseId:string,studentId:string)
    {   
         return this.http.post<GeneralResponse<boolean>>(this.postAttendStudent,{courseId,studentId})
    }
}