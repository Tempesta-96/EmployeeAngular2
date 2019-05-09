import { Component, OnInit, Input } from '@angular/core';
import { UserConstructor } from '../user-constructor';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  url: string;
  @Input() employee: UserConstructor;

  constructor(private empService: EmployeeService, private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8090/EmpProject/EmpLoginServlet';
  }

  loginContainer = true;
  nav = true;
  loginUsername: string;
  loginPassword: string;
  msg: string;
  errormsg: string;
  ngOnInit() {
  }

  submit(loginUsername: string, loginPassword: string) {
    if (loginUsername == null || loginPassword == null) {
      this.msg = " username and password is empty";
      this.errormsg = "";
    }
    else {
      const user = new UserConstructor(loginUsername, loginPassword);
      const userJson = JSON.stringify(user);
      this.empService.userLogin(user).subscribe(data => {
        console.log(data);
        if (data.password == loginPassword) {
          this.router.navigate(["employeehome"]);
        }
        else {
          this.msg = "";
          this.errormsg = "incorrect username or password";
        }
      });

      this.clear();

    }
  }
  clear() {
    this.loginUsername = null;
    this.loginPassword = null;
  }
}
