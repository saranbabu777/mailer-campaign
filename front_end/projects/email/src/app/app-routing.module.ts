import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Template1Component } from 'projects/email/src/app/views/template1/template1.component';
import { PreviewTemplateComponent } from 'projects/email/src/app/views/preview-template/preview-template.component';
import { UserAuthentication } from 'src/app/user-authentication/user-authentication';


const routes: Routes = [
  {
    path: 'email/template1/:id', component: Template1Component,
    canActivate: [UserAuthentication]
  },
  {
    path: 'email/template1/:generate/:id', component: Template1Component,
    canActivate: [UserAuthentication]
  },
  {
    path: 'email/preview/:id', component: PreviewTemplateComponent,
    canActivate: [UserAuthentication]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
