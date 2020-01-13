import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionResponseRoutingModule } from './subscription-response-routing.module';
import { SubscribedComponent } from './subscribed/subscribed.component';
import { UnsubscribedComponent } from './unsubscribed/unsubscribed.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    SubscribedComponent,
    UnsubscribedComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SubscriptionResponseRoutingModule
  ]
})
export class SubscriptionResponseModule { }
