import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenotfound'
})
export class ImagenotfoundPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value?value:'https://cdn.browshot.com/static/images/not-found.png';
  }

}
