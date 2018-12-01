import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {

  transform(value: string, replaceWhat: string, replaceBy: string, toLower: boolean): any {
    return toLower ? value.split(replaceWhat).join(replaceBy).toLocaleLowerCase() : value.split(replaceWhat).join(replaceBy);
  }

}
