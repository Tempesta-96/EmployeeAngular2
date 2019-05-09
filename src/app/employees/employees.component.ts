import { Component, OnInit } from '@angular/core';
import { EmployeeConstructor } from 'src/app/employee-constructor';
// import { Employees } from 'src/app/emoployee-list';
import { ActivatedRoute } from '@angular/router';
import { Location, JsonPipe } from '@angular/common';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  url: string;
  public list = false;
  public selectedEmployeeList = false;
  public result = [];

  selectedEmployee: EmployeeConstructor;
  selectedEmployeeName: string;
  selectedEmployeeDesignation: string;
  selectedEmployeeAge: number;
  selectedEmployeeSalary: number;



  constructor(private route: ActivatedRoute,
    private location: Location,
    private empService: EmployeeService) {
  }

  ngOnInit() {
  }

  onSelect(Employee: EmployeeConstructor): void {
    this.selectedEmployee = Employee;
    this.selectedEmployeeName = Employee.name;
    this.selectedEmployeeAge = Employee.age;
    this.selectedEmployeeDesignation = Employee.designation;
    this.selectedEmployeeSalary = Employee.salary;

  }

  goHome(): void {
    window.location.href = 'http://localhost:4200/';
  }

  deleteEmp(Employee: EmployeeConstructor) {
    this.empService.deleteEmp(Employee).subscribe(
      data => {
        console.log('success', data)
        this.list = false;
        this.listEmp();
      },
      error => console.log('oops', error)
    );
  }

  listEmp() {
    this.result = [];
    this.list = !this.list;
    this.selectedEmployee = null;
    if (this.result != null) {
      this.empService.listEmp().subscribe(data => {
        data.map(el => {
          this.result.push(el);
        });
        console.log(data);
      })
    }

  }

  updateEmp() {
    this.empService.updateEmp(this.selectedEmployee).subscribe(
      data => {
        console.log('success', data)
        this.selectedEmployeeName = data.name;
        this.selectedEmployeeAge = data.age;
        this.selectedEmployeeDesignation = data.designation;
        this.selectedEmployeeSalary = data.salary;
      },
      error => console.log('error', error)
    );
  }

  resetEmp(Employee: EmployeeConstructor) {
    this.selectedEmployee.name = this.selectedEmployeeName;
    this.selectedEmployee.designation = this.selectedEmployeeDesignation;
    this.selectedEmployee.age = this.selectedEmployeeAge;
    this.selectedEmployeeSalary = this.selectedEmployeeSalary;
  }


}