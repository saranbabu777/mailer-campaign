import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/dashboard/home/home.component';
import { UserAuthentication } from '../user-authentication/user-authentication';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [ UserAuthentication ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
