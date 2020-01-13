import { Component, OnInit, HostListener } from '@angular/core';
import { SectionProps } from 'src/app/editor/models/section-props';
import { TemplatePlaceholdersService } from 'src/app/editor/services/template-placeholders.service';
import { TemplateService } from '../../services/template.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: [ './template1.component.scss' ]
})
export class Template1Component implements OnInit {

  public sections: SectionProps[];
  public index: number;

  constructor(private templatePlaceholdersService: TemplatePlaceholdersService, private templateService: TemplateService, private route: ActivatedRoute) {
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
    ]
    this.templatePlaceholdersService.getSections().subscribe(response => {
      this.sections = response;
    });
    this.templatePlaceholdersService.sections.next(sections);
    this.index = 0;
    this.templatePlaceholdersService.index.next(this.index);
  }

  ngOnInit() {
    this.route.params.subscribe(response => {
      this.templateService.fileName = "email-template1-" + response.id;
      this.templateService.templateId = response.id;
      this.templateService.getTemplate(response.id).then(response => {
        this.sections = JSON.parse(response[ 'sections' ]);
        console.log(this.sections);
      }).catch(() => {
      });
    });
  }

  @HostListener('click', [ '$event' ])
  onClick(event): void {
    if (event.target.classList.contains('section')) {
      const idSplit = event.target.id.split('-');
      this.index = Number(idSplit[ 1 ]);
      this.templatePlaceholdersService.index.next(this.index);
    }
  }
}
