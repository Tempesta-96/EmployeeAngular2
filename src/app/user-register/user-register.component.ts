import { Component, OnInit, Input } from '@angular/core';
// import { Employees } from 'src/app/emoployee-list';
// import { EmployeesComponent } from '../employees/employees.component';
// import { EmployeeConstructor } from '../employee-constructor';
import { UserConstructor } from '../user-constructor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { logging } from 'protractor';
import { EmployeeService } from '../employee.service';
// import { loginContainer } from '../user-login/user-login.component'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  @Input() employee: UserConstructor;

  constructor(private empService: EmployeeService) { }
  loginUsername: string;
  loginPassword: string;
  msg: string;
  ngOnInit() {
  }

  submit(loginUsername: string, loginPassword: string) {
    if (loginUsername == null || loginPassword == null ) {
      this.msg = "please check again";
    }
    else {
      const user = new UserConstructor(loginUsername, loginPassword);
      const userJson = JSON.stringify(user);
      this.empService.userRegister(user).subscribe(data => {

      })
      console.log(userJson);

      this.clear();
    }
  }

  clear() {
    this.loginUsername = null;
    this.loginPassword = null;
  }
}
