import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscribed',
  templateUrl: './subscribed.component.html',
  styleUrls: ['./subscribed.component.scss']
})
export class SubscribedComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService) { 
    subscriptionService.subscribe()
    .then(() => {})
    .catch(() => {});
  }

  ngOnInit() {
  }

}
