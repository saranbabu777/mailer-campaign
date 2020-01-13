import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-unsubscribed',
  templateUrl: './unsubscribed.component.html',
  styleUrls: ['./unsubscribed.component.scss']
})
export class UnsubscribedComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService) { 
    subscriptionService.unsubscribe()
    .then(() => {})
    .catch(() => {});
  }

  ngOnInit() {
  }

}
