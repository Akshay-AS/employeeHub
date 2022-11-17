import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmp } from 'src/app/iemp';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
  styleUrls: ['./homec.component.scss']
})
export class HomecComponent implements OnInit {

  constructor(private router: Router) { }

  empList: IEmp[] = [];
  // currentUser:IEmp[]=[];
  currentUser!: IEmp;


  ngOnInit(): void {
    this.empList = JSON.parse(localStorage.getItem("EmployeeList") || '{}');


  }
  showEmployee(i: IEmp) {
    this.currentUser = JSON.parse(localStorage.getItem("loggedUser") || '{}');    
    // console.log(this.currentUser);
    if (this.currentUser.EmployeeId == i.EmployeeId || this.currentUser.teamNumber == 1 || this.currentUser.teamNumber == 2) {
      console.log(i);
      this.router.navigate(["/details", i.EmployeeId]);
    }
    else {
      alert("Access Denied!!!");
    }


  }

}
