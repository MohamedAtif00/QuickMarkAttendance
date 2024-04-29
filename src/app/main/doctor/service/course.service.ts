import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { envro } from "src/environment";
import { CreateCourseRequest } from "../model/request/create-course.request";
import { GeneralResponse } from "src/app/Core/model/general.response";
import { CourseModel } from "src/app/Core/model/course.model";
import { StudentModule } from "../../student/student.module";
import { StudentModel } from "src/app/Core/model/Student.model";

@Injectable({
    providedIn: 'root'
})

export class CourseService {



    postCreateCourse:string = `${envro.localhost}api/course`;
    getCourse:string = `${envro.localhost}api/Course/GetCourse/`
    getAttendedStudentsForCourse :string = `${envro.localhost}api/Attendance/GetAttendedStudents/`

    constructor(private http:HttpClient){}



    CreateCourse(request:CreateCourseRequest)
    {
        return this.http.post<GeneralResponse<CourseModel>>(this.postCreateCourse,request);
    }

    GetCourse(courseId:string)
    {
        return this.http.get<GeneralResponse<CourseModel>>(this.getCourse+courseId)
    }

    GetAttendedStudentsForCourse(id:string)
    {
        return this.http.get<GeneralResponse<StudentModel[]>>(this.getAttendedStudentsForCourse+id)
    }
}