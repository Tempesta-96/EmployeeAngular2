import { Component, OnInit, Input } from '@angular/core';
// import { Employees } from 'src/app/emoployee-list';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeConstructor } from '../employee-constructor';
import { EmployeeService } from '../employee.service';
import { Observable, of, from } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { listenToElementOutputs } from '@angular/core/src/view/element';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  @Input() employee: EmployeeConstructor;
  public result = [];

  selectedEmployee: EmployeeConstructor;
  selectedEmployeeName: string;
  selectedEmployeeDesignation: string;
  selectedEmployeeAge: number;
  selectedEmployeeSalary: number;
  constructor(private EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.result = [];
    this.EmployeeService.listEmp().subscribe(data => {
      data.map(el => {
        this.result.push(el);
      });
      console.log(data);
    });
  }

  onSelect(Employee: EmployeeConstructor): void {
    this.selectedEmployee = Employee;
    this.selectedEmployeeName = Employee.name;
    this.selectedEmployeeAge = Employee.age;
    this.selectedEmployeeDesignation = Employee.designation;
    this.selectedEmployeeSalary = Employee.salary;

  }

  logout(): void {
    window.location.href = 'http://localhost:4200/';
  }

  // const myObservable = of(1, 2, 3);

  // // Create observer object
  // const myObserver = {
  //   next: x => console.log('Observer got a next value: ' + x),
  //   error: err => console.error('Observer got an error: ' + err),
  //   complete: () => console.log('Observer got a complete notification'),
  // };

  // // Execute with the observer object
  // myObservable.subscribe(myObserver);

}
