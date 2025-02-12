import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent {


  registerForm!:FormGroup;

  constructor(private authServ:AuthService,private router:Router){}


  ngOnInit(): void {
    this.registerForm = new FormGroup
    (
        {
          username: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ])
        }
    );
  }


  CheckUsername():AsyncValidatorFn
  {
    return (AbstractControl):Observable<ValidationErrors|null> =>{
      let username = this.registerForm.controls['username'].value;
      return this.authServ.CheckUsrname(username).pipe(
        map((data)=>{
          console.log(data);
          
          return data?{nameTaken:true}: null
        }),
        catchError(() => of(null))
      );
    }
 }

 submitForm() {
  //if (this.registerFor) {
    console.log(this.registerForm);
    // Perform form submission logic here
  //}

  let info = {
    username:this.registerForm.controls['username'].value,
    email:this.registerForm.controls['email'].value,
    password:this.registerForm.controls['password'].value,
  }

  if(this.registerForm.valid)
  {
    this.authServ.DoctorRegister(info).subscribe((data)=>{

      console.log(data);

      if(data.value) 
        this.router.navigate(['']);

    });
  } 
}



}
