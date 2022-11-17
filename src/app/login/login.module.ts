import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincComponent } from './loginc/loginc.component';
import { loginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LogincComponent
  ],
  imports: [
    CommonModule,
    loginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
