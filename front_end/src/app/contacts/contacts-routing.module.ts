import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsHomeComponent } from './contacts-home/contacts-home.component';
import { ImportContactsComponent } from './import-contacts/import-contacts.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
