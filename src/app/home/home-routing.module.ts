import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomecComponent } from './homec/homec.component';

const routes: Routes = [{ path: '', component: HomecComponent },
{ path: 'details/:eid', component: DetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homeRoutingModule { }
