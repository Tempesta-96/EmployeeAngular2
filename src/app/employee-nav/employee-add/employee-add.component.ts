import { Component, OnInit } from '@angular/core';
import { EmployeeConstructor } from 'src/app/employee-constructor';
import { EmployeeService } from 'src/app/employee.service';
// import { Employees } from 'src/app/emoployee-list';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService]
})
export class EmployeeAddComponent implements OnInit {
  url: string;

  constructor(private empService: EmployeeService, private http: HttpClient) {
    this.url = 'http://localhost:8090/EmpProject/AddEmpServlet';
   }

  employeeId: number;
  employeeName: string;
  employeeDesignation: string;
  employeeSalary: number;
  employeeAge: number;
  ngOnInit() {

  }


  goHome(): void {
    window.location.href = 'http://localhost:4200/employeehome';
  }

  submit(employeeId: number, employeeName: string, employeeDesignation: string, employeeSalary: number, employeeAge: number, ): void {

    const emp = new EmployeeConstructor(employeeId, employeeName, employeeDesignation, employeeSalary, employeeAge);
    const empJson = JSON.stringify(emp);
    this.empService.addEmployee(emp).subscribe(data=>{

    });

    this.clear();
  }

  clear(): void {
    this.employeeName = null;
    this.employeeId = null;
    this.employeeDesignation = null;
    this.employeeAge = null;
    this.employeeSalary = null;
  }
}
