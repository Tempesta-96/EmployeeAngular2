import { Component, OnInit, Input } from '@angular/core';
// import { Employees } from 'src/app/emoployee-list';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeConstructor } from '../employee-constructor'; 


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: EmployeeConstructor;

  constructor() { }

  ngOnInit() {
  }

}
