import { Injectable } from '@angular/core';
import { SectionProps } from 'src/app/editor/models/section-props';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TemplatePlaceholdersService {

  public sections: Subject<SectionProps[]> = new Subject<SectionProps[]>();
  public index: Subject<number> = new Subject<number>();

  constructor() { }

  getSections(): Observable<SectionProps[]> {
    return this.sections.asObservable();
  }

  getIndex(): Observable<number> {
    return this.index.asObservable();
  }
}
