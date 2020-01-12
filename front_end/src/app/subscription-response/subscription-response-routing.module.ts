import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribedComponent } from './subscribed/subscribed.component';
import { UserAuthentication } from '../user-authentication/user-authentication';
import { UnsubscribedComponent } from './unsubscribed/unsubscribed.component';


const routes: Routes = [
  {
    path: 'subscribed',
    component: SubscribedComponent,
    canActivate: [ UserAuthentication ],
    data: { isPublic: true }
  },
  {
    path: 'unsubscribed',
    component: UnsubscribedComponent,
    canActivate: [ UserAuthentication ],
    data: { isPublic: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionResponseRoutingModule { }
