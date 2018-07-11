import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeRecord'
})
export class ActiveRecordPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.filter( x => x.IsActive);

  }

}
