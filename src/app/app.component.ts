import { Component } from '@angular/core';
import { EmplogService } from './emplog.service';
import { IEmp } from './iemp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employeeHub';
  empList: IEmp[] = [];
  constructor(private EmpService: EmplogService) { }
  ngOnInit(): void {
    this.empList.push({ EmployeeName: "AAAA", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 111, teamNumber: 1 },
      { EmployeeName: "BBBB", PhoneNumber: 7894561320, Address: "abc", Password: "abc231", EmployeeId: 112, teamNumber: 2 },
      { EmployeeName: "CCCC", PhoneNumber: 7894561320, Address: "abc", Password: "xdx231", EmployeeId: 113, teamNumber: 3 },
      { EmployeeName: "DDDD", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 114, teamNumber: 4 },
      { EmployeeName: "EEEE", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 115, teamNumber: 5 },
      { EmployeeName: "FFFF", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 116, teamNumber: 6 },
      { EmployeeName: "GGGG", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 117, teamNumber: 7 },
      { EmployeeName: "HHHH", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 118, teamNumber: 8 },
      { EmployeeName: "IIII", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 119, teamNumber: 1 },
      { EmployeeName: "JJJJ", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 120, teamNumber: 2 },
      { EmployeeName: "KKKK", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 121, teamNumber: 3 },
      { EmployeeName: "LLLL", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 122, teamNumber: 4 },
      { EmployeeName: "MMMM", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 123, teamNumber: 5 },
      { EmployeeName: "NNNN", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 124, teamNumber: 6 },
      { EmployeeName: "OOOO", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 125, teamNumber: 7 },
      { EmployeeName: "PPPP", PhoneNumber: 7894561320, Address: "abc", Password: "xyz231", EmployeeId: 126, teamNumber: 8 },
    );

    localStorage.setItem("EmployeeList", JSON.stringify(this.empList));
  }


  public Home() {

  }

  public Login() {
    if (this.EmpService.isLogged()) {
      return false
    }
    else { return true };

  }
  public Logout() {
    localStorage.removeItem("loggedUser");
    this.EmpService.currentUser = JSON.parse(localStorage.getItem("loggedUser") || "{}");
    console.log(this.EmpService.currentUser);

  }

}
