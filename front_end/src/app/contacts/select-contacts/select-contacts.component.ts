import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { TemplateService } from 'src/app/editor/services/template.service';

@Component({
  selector: 'app-select-contacts',
  templateUrl: './select-contacts.component.html',
  styleUrls: ['./select-contacts.component.scss']
})
export class SelectContactsComponent implements OnInit {

  public contactLists = [];
  public campaignName = '';
  public mailSubject = '';
  public list = '';

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private templateService: TemplateService
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
    const request = {
      campaignName: this.campaignName,
      mailSubject: this.mailSubject,
      listName: this.list,
      createdBy: 'arvind'
    }
    this.templateService.sendMail(request).then(response => {
      // this.router.navigate([ this.previewUrl + response[ 'templateId' ] ]);
    }).catch(() => {
      localStorage.setItem('request', JSON.stringify(request));
      // this.router.navigate([ this.previewUrl + '0' ]);
    });
  }

  goBack() {
    this.router.navigate([this.contactsService.previousRoute]);
  }

}
