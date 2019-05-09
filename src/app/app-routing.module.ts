import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeConstructor } from 'src/app/employee-constructor';


import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from 'src/app/user-register/user-register.component';

import { EmployeeAddComponent } from 'src/app/employee-nav/employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee-nav/employee-delete/employee-delete.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/loginUser', pathMatch: 'full' },
  // { path: '**', component: UserLoginComponent },
  { path: 'loginUser', component: UserLoginComponent },
  { path: 'registerUser', component: UserRegisterComponent },
  { path: 'employee', component: EmployeesComponent },
  { path: 'addEmployee', component: EmployeeAddComponent },
  { path: 'deleteEmployee', component: EmployeeDeleteComponent },
  { path: 'employeehome', component: EmployeeHomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




