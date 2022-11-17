import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IEmp } from './iemp';
import { loginRoutingModule } from './login/login-routing.module';

@Injectable({
  providedIn: 'root'
})
export class EmplogService {

  constructor(private router: Router) { }
  empList: IEmp[] = [];
  flag: number = 0;
  logged: boolean = true;
  currentUser!: IEmp;




  login(eid: any, psw: any) {
    this.flag=0;
    this.empList = JSON.parse(localStorage.getItem("EmployeeList") || "{}");

    for (let i of this.empList) {
      if (eid == i.EmployeeId && psw == i.Password) {
        console.log("Successfully Logged");
        this.flag = 1;
        this.currentUser = i;
        localStorage.setItem("loggedUser", JSON.stringify(this.currentUser));
        this.router.navigate(["/details", eid]);
        this.logged = !this.logged
      }
    }
    if (this.flag == 0) {
      alert("Login Failed");
    }
  }
  isLogged() {
    this.currentUser = JSON.parse(localStorage.getItem("loggedUser") || "{}");
    if (Object.keys(this.currentUser).length === 0) {
      return false;
    }
    else {
      return true;
    }
  }
}



