import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, catchError, map } from "rxjs";
import { AuthService } from "src/app/authentication/service/auth.service";


@Injectable({
    providedIn:'root'
})
export class DoctorCanActivate implements CanActivate {

    constructor(private authServ: AuthService, private router: Router) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
      return this.authServ.AllowAccessToken().pipe(
        map((data) => {

          console.log(data);
          if (data) {
            console.log(data);
            if(data.role == 'Doctor')
            {

                return true; // User is authenticated, allow access to the route
            }
            else{

                return false
            }
          } else {
            // User is not authenticated, redirect to login page or any other route
            return this.router.parseUrl('/login');
          }
        }));
    }
  }