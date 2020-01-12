import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-select-contacts',
  templateUrl: './select-contacts.component.html',
  styleUrls: ['./select-contacts.component.scss']
})
export class SelectContactsComponent implements OnInit {

  public contactLists = [];

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactLists = this.contactsService.getContactListNames();
    if(!this.contactsService.previousRoute) {
      this.router.navigate(['/contacts']);
    }
  }

  onAddContacts() {
    this.contactsService.sendTemplate = true;
    this.router.navigate(['/contacts']);
  }

  sendEmail(){
  }

  goBack() {
    this.router.navigate([this.contactsService.previousRoute]);
  }

}
