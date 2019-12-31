import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRow',
  pure: false
})
export class FilterRowPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.filter(row => row.gid === args[ 0 ]);
  }

}
