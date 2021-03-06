import { Component, OnInit, HostListener } from '@angular/core';
import { TemplatePlaceholdersService } from 'src/app/editor/services/template-placeholders.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: [ './image.component.scss' ]
})
export class ImageComponent implements OnInit {

  public section: any;
  public i: number;
  public editing: boolean;

  constructor(private templatePlaceholdersService: TemplatePlaceholdersService) { }

  ngOnInit() {
  }

  @HostListener('click', [ '$event' ])
  onClick(event): void {
    this.templatePlaceholdersService.index.next(this.i);
  }
}
