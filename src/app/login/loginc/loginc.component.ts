import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmplogService } from 'src/app/emplog.service';

@Component({
  selector: 'app-loginc',
  templateUrl: './loginc.component.html',
  styleUrls: ['./loginc.component.scss']
})
export class LogincComponent implements OnInit {

  constructor(private service: EmplogService) { }

  ngOnInit(): void {
  }

  public eid: any;
  public psw: any;

  form = new FormGroup(
    {
      EmployeeId: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    }
  );

  Submit() {
    this.service.login(this.eid, this.psw);
  }
}
