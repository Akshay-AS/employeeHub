import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmp } from 'src/app/iemp';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  empList:IEmp[]=JSON.parse(localStorage.getItem("EmployeeList")||"{}");
  i!:IEmp;

  ngOnInit(): void {
    this.route.paramMap.subscribe(m => {
      var id = m.get("eid");
      for(let temp of this.empList){
        if(JSON.stringify(temp.EmployeeId)==id){
          this.i=temp;
        }
      }
    })
  }

  

  //empList:IEmp[]=[];
  // i: IEmp = JSON.parse(localStorage.getItem("loggedUser") || "{}");

}
