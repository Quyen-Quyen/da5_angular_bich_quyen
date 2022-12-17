import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestppComponent } from './testpp/testpp.component';

const routes: Routes = [
  {
    path:"admin",
    loadChildren:() =>
    import('./Admin/admin.module').then((m)=>m.AdminModule),
  },
  {
    path:"",
    loadChildren:() =>
    import('./user/user.module').then((m)=>m.UserModule),
  },
  {
    path:'test',
    component:TestppComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
