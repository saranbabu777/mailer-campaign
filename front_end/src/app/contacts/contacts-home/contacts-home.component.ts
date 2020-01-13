import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactsService } from '../contacts.service';
import { AddContactsComponent } from '../add-contacts/add-contacts.component';
import { ImportContactsComponent } from '../import-contacts/import-contacts.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-home',
  templateUrl: './contacts-home.component.html',
  styleUrls: ['./contacts-home.component.scss']
})
export class ContactsHomeComponent implements OnInit {

  contactLists = [];
  public contacts = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone'];
  selectedList = '';
  showContacts = false;
  sendTemplate = false;

  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.sendTemplate = this.contactsService.sendTemplate;
    this.contactLists = this.contactsService.getContactListNames();
    this.contactLists.push('All');
    this.contacts = this.contactsService.userLists[0] ? this.contactsService.userLists[0].users : [];
    this.selectedList = this.contactsService.userLists[0] ? this.contactsService.userLists[0].name : '';
    this.showContacts = this.contactLists.length > 1 ? true : false;
  }

  onAddContacts() {
    const dialogRef = this.dialog.open(AddContactsComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  onImportContacts() {
    const dialogRef = this.dialog.open(ImportContactsComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  updateUserList() {
    if (this.selectedList === 'All') {
      this.contacts = this.contactsService.allContacts();
    } else {
      this.contacts = this.contactsService.getContacts(this.selectedList);
    }
  }

  onSendEmail() {
    this.router.navigate(['/contacts/select']);
  }

}
