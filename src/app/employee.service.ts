import { Injectable } from '@angular/core';

// import { Http } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { EmployeeConstructor } from './employee-constructor';
import { Employees } from 'src/app/employee-list';
import { UserConstructor } from './user-constructor';
import { userInfo } from 'os';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  url: string
  EmpList: EmployeeConstructor[];

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8090/EmpProject';
  }

  addEmployee(emp: EmployeeConstructor) {
    const url = this.url + '/AddEmpServlet';
    const empJson = JSON.stringify(emp);
    console.log(url);
    console.log(empJson);
    return this.http.post<EmployeeConstructor>(url, empJson, httpOptions)
  }

  deleteEmp(emp: EmployeeConstructor) {
    console.log(emp.id, emp.name, emp.age, emp.designation, emp.salary)
    const url = this.url + '/DeleteEmpDetailServlet2'
    const empJson = JSON.stringify(emp);
    console.log(url);
    console.log(empJson);
    return this.http.post<EmployeeConstructor>(url, empJson, httpOptions);
  }

  listEmp() {
    const url = this.url + '/ListEmpServlet';
    console.log(url);
    return this.http.get<Array<EmployeeConstructor>>(url, httpOptions);
  }

  updateEmp(emp: EmployeeConstructor) {
    const url = this.url + '/UpdateEmpDetailServlet2'
    const empJson = JSON.stringify(emp);
    console.log(url);
    console.log(empJson);
    return this.http.post<EmployeeConstructor>(url, empJson, httpOptions);
  }

  userLogin(user: UserConstructor) {
    const url = this.url + '/EmpLoginServlet'
    const userJson = JSON.stringify(user);
    console.log(url);
    console.log(userJson);
    return this.http.post<UserConstructor>(url, userJson, httpOptions);
  }

  userRegister(user: UserConstructor) {
    const url = this.url + '/RegisterEmpServlet'
    const userJson = JSON.stringify(user);
    console.log(url);
    console.log(userJson);
    return this.http.post<UserConstructor>(url, userJson, httpOptions);
  }
}
