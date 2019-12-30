import { Component, OnInit } from '@angular/core';
import { SectionProps } from 'src/app/editor/models/section-props';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: [ './preview.component.scss' ]
})
export class PreviewComponent implements OnInit {

  public template: SectionProps[];

  constructor() {
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
        }
      },
      {
        type: 'text',
        text: 'Lorem Ipsum is simply dummy text of the !!!!!',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        }
      },
      {
        type: 'text',
        text: 'Small Text',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        }
      },
      {
        type: 'text',
        text: 'Lorem Ipsum is simply a Date',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        }
      },
      {
        type: 'text',
        text: 'Be ready with your wishlist!!',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        }
      },
      {
        type: 'button',
        text: 'submit',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        }
      },
      {
        type: 'button',
        text: 'submit',
        style: {
          fontSize: '',
          fontColor: '',
          backgroundColor: '',
          fontWeight: ''
        }
      }
    ];
    try {
      const request = JSON.parse(localStorage.getItem('request'));
      this.template = JSON.parse(request.sections)
    } catch (e) {
      /*Load sample data if no request*/
      this.template = sections;
    }
  }

  ngOnInit() {
  }

}
