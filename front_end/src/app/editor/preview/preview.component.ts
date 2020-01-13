import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SectionProps } from 'src/app/editor/models/section-props';
import { TemplateService } from 'src/app/editor/services/template.service';
import { ContactsService } from 'src/app/contacts/contacts.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: [ './preview.component.scss' ]
})
export class PreviewComponent implements OnInit {

  @Input() public hideBtn: boolean;
  public showLoader: boolean;
  public template: SectionProps[];
  public rows: number[];

  constructor(private templateService: TemplateService, private router: Router, private route: ActivatedRoute,
    private contactsService: ContactsService) {
    this.template = []; /*Do API Call*/
    const sections = [
      {
        type: 'image',
        url: 'assets/img/ecart-logo.PNG',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        },
        rowId: 0,
        index: 0
      },
      {
        type: 'text',
        text: 'Lorem Ipsum is simply dummy text of the !!!!!',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        },
        rowId: 1,
        index: 1
      },
      {
        type: 'text',
        text: 'Small Text',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        },
        rowId: 2,
        index: 2
      },
      {
        type: 'text',
        text: 'Lorem Ipsum is simply a Date',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        },
        rowId: 3,
        index: 3
      },
      {
        type: 'text',
        text: 'Be ready with your wishlist!!',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        },
        rowId: 4,
        index: 4
      },
      {
        type: 'button',
        text: 'submit',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        },
        rowId: 5,
        index: 5
      },
      {
        type: 'button',
        text: 'submit',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        },
        rowId: 6,
        index: 6
      }
    ];
    this.route.params.subscribe(response => {
      this.templateService.fileName = "email-preview-" + response.id;
    });
    try {
      const request = JSON.parse(localStorage.getItem('request'));
      this.template = JSON.parse(request.sections);
    } catch (e) {
      /*Load sample data if no request*/
      this.template = sections;
    }
    /*Do this after API call*/
    this.generateRows();
  }

  ngOnInit() {
  }

  generateTemplate() {
    this.showLoader = true;
    this.templateService.generateTemplate(true).then((response) => {
      this.showLoader = false;
      console.log(response);
      this.contactsService.previousRoute = this.router.url;
      this.router.navigate([ '/contacts/select' ]);
    }).catch(response => {
      this.contactsService.previousRoute = this.router.url;
      this.router.navigate([ '/contacts/select' ]);
    });
  }

  generateRows() {
    this.rows = [];
    let max = 0;
    const arrayLength = this.template.length;
    for (let i = 0; i < arrayLength; i++) {
      let t = this.template[ i ];
      max = t.rowId > max ? t.rowId : max;
    }
    for (let i = 0; i <= max; i++) {
      this.rows.push(i);
    }
  }
}
