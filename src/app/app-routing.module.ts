import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'auth',loadChildren:()=>import('./authentication/authentication.module').then(x=>x.AuthenticationModule)},
  {path:'main',loadChildren:()=>import('./main/main.module').then(x=>x.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
