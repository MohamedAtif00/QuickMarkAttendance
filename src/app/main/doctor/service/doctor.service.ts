import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DoctorModel } from "src/app/Core/model/doctor.model";
import { GeneralResponse } from "src/app/Core/model/general.response";
import { envro } from "src/environment";


@Injectable(
    {
        providedIn:'root'
    }
)
export class DoctorService{



    getSingleDoctor:string = `${envro.localhost}api/Doctor/GetSingleDoctor/`
    constructor(private http:HttpClient){}


    GetSingleDoctor(id:string)
    {
        return this.http.get<GeneralResponse<DoctorModel>>(this.getSingleDoctor+id)
    }
}