import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginComponent } from 'src/app/user-login/user-login.component';
import { UserRegisterComponent } from 'src/app/user-register/user-register.component';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-nav/employee-add/employee-add.component';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeDeleteComponent } from './employee-nav/employee-delete/employee-delete.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,

    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent,
    EmployeeHomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
