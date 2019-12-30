import { Component, OnInit, HostListener } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SectionProps } from 'src/app/editor/models/section-props';
import { TemplatePlaceholdersService } from 'src/app/editor/services/template-placeholders.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: [ './design.component.scss' ]
})
export class DesignComponent implements OnInit {

  public template: SectionProps[];
  public index: number;
  public icons = { image: 'image', text: 'file-text', button: 'square' };
  public elements = [
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

  constructor(private templatePlaceholdersService: TemplatePlaceholdersService) {
    this.template = []; /*Empty template*/
    this.templatePlaceholdersService.sections.next(this.template);
    this.templatePlaceholdersService.getIndex().subscribe(response => {
      this.index = response;
    });
  }

  ngOnInit() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      const clone = JSON.parse(JSON.stringify(event.previousContainer.data[ event.previousIndex ]));
      event.container.data.splice(event.currentIndex, 0, clone);// Add the clone to the new array.
      this.index = event.currentIndex;
      this.templatePlaceholdersService.sections.next(this.template);
      this.templatePlaceholdersService.index.next(this.index);
    }
  }

}
