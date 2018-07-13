import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProperty'
})
export class FilterPropertyPipe implements PipeTransform {

  transform(value: any[], PropertyId: number): any[] {
    return value.filter( x => x.PropertyId === PropertyId);
  }

}
