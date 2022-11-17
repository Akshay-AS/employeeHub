import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomecComponent } from './homec/homec.component';
import { DetailsComponent } from './details/details.component';
import { homeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    DetailsComponent,
    HomecComponent
  ],
  imports: [
    CommonModule,
    homeRoutingModule
  ]
})
export class HomeModule { }
