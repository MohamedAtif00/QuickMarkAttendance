import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, throwError } from "rxjs";
import { GeneralResponse } from "src/app/Core/model/general.response";
import { UserModel } from "src/app/Core/model/user.model";
import { StudentLoginRequest, DonorLoginRequest } from "../model/Request/login.request";
import { StudentRegister, DonorRegister } from "../model/Request/register.request";
import { AllowAccessResponse } from "../model/Response/allow-access.response";
import { StudentLoginResponse, DonorLoginResponse } from "../model/Response/login.response";
import { StudentRegisterResponse } from "../model/Response/register.response";
import { enviroProd } from "src/environment.prod";
import { envro } from "src/environment";


@Injectable({
    providedIn:'root'
})
export class AuthService{


    getAllowAccess:string = `${envro.localhost}api/Authentication/AllowAccess`
    postStudentLogin:string = `${envro.localhost}api/Authentication/Login`
    postDonorLogin:string = `${envro.localhost}api/Authentication/DoctorLogin`
    postStudentRegister:string = `${envro.localhost}api/Authentication/Register`
    postDoctorRegister:string = `${envro.localhost}api/Authentication/DoctorRegister`
    getCheckUsername:string = `${envro.localhost}api/Authentication/CheckUsername/`
    postAdminLogin:string = `${envro.localhost}api/Authentication/AdminLogin`


    user!:UserModel;
    token!:string | null

    constructor(private http:HttpClient){

        this.token = localStorage.getItem('User_Token_Key')
        if(this.token)
             this.http.post<any>(this.getAllowAccess , {token:this.token}).subscribe(data=>{
                this.user = {id:data.userid,username:data.username,email:data.email,role:data.role,token:data.token}
        })
    }

    init()
    {
        this.token = localStorage.getItem('User_Token_Key')
        if(this.token)
            return this.http.post<any>(this.getAllowAccess , {token:this.token})
        else return null

    }

    GetToken()
    {
        return localStorage.getItem('User_Token_Key');
    }

    SetTokens(token:string)
    {
         localStorage.setItem('User_Token_Key',token)
    }

    StudentLogin(studentInfo:StudentLoginRequest)
    {
        return this.http.post<GeneralResponse<StudentLoginResponse>>(this.postStudentLogin,studentInfo).pipe(map(data=>{
            if(data ) console.log(data);

            if(data.value)
            {
                this.user = {id:data.value.userId,username:data.value.username,email:'',role:data.value.role,token:data.value.jwtToken}
                localStorage.setItem('User_Token_Key',data.value.jwtToken)
                this.token =this.GetToken()
            }
            return data
        }));
    }

    StudentRegister(studentInfo:StudentRegister)
    {
        return this.http.post<StudentRegisterResponse>(this.postStudentRegister,studentInfo)
        .pipe(map(data=>{
            this.user = {id:data.value.userId,username:data.value.username,email:studentInfo.email,role:data.value.role,token:data.value.jwtToken}
            localStorage.setItem('User_Token_Key',data.value.jwtToken)
            this.token = this.GetToken()
            return data;
        }));
    }

    DoctorLogin(donorInfo:DonorLoginRequest)
    {
        return this.http.post<GeneralResponse<DonorLoginResponse>>(this.postDonorLogin,donorInfo)
        .pipe(
            map((data) =>{
            if(data) console.log(data);
            


            if(data.value)
            {
                this.user = {id:data.value.userId,username:data.value.username,email:'',role:data.value.role,token:data.value.jwtToken}
                localStorage.setItem('User_Token_Key',data.value.jwtToken)
                this.token =this.GetToken()
            }

            return data

        })
        );
    }
    DoctorRegister(DonroInfo:DonorRegister)
    {
        return this.http.post<StudentRegisterResponse>(this.postDoctorRegister,DonroInfo)
        .pipe(map(data=>{
            this.user = {id:data.value.userId,username:data.value.username,email:DonroInfo.email,role:data.value.role,token:data.value.jwtToken}
            localStorage.setItem('User_Token_Key',data.value.jwtToken)
            this.token = this.GetToken()
            return data;
        }));
    }

    AdminLogin(login:{username:string,password:string})
    {
        return this.http.post<GeneralResponse<DonorLoginResponse>>(this.postAdminLogin,login)
        .pipe(
            map((data) =>{
            if(data) console.log(data);
            

            if(data.value)
            {
                this.user = {id:data.value.userId,username:data.value.username,email:'',role:data.value.role,token:data.value.jwtToken}
                localStorage.setItem('User_Token_Key',data.value.jwtToken)
                this.token =this.GetToken()
            }
                return data
        })
        );
    }



    AllowAccessToken(): Observable<AllowAccessResponse | null> {
        const token = this.GetToken();
      
        if (!token) {
          return of(null); // Return null if no token is available
        }
      
        const url = `${this.getAllowAccess}`;
      
        return this.http.post<AllowAccessResponse>(url,{token:token}).pipe(
          catchError(error => {
            // Handle errors appropriately (e.g., log the error, display a user-friendly message)
            console.error('Error fetching allow access:', error);
            return throwError(() => new Error('Failed to get allow access')); // Re-throw a user-friendly error
          })
        );
    }
      

    CheckUsrname(username:string)
    {
        return this.http.get<boolean>(this.getCheckUsername+username);
    }

    Logout()
    {
        localStorage.removeItem('User_Token_Key')
        this.user = {id:'',username:'',email:'',role:'',token:''}
        this.token = null
    }


}