import { Pipe, PipeTransform } from '@angular/core';
import { Content}   from './helper-files/content-interface';

@Pipe({
  name: 'contentType',
  standalone: true
})
export class ContentTypePipe implements PipeTransform {

  transform(contentItems: Content[], type?: string): Content[] {
    if(type && type!= ''){
      return contentItems.filter((contentItem)=> contentItem.type?.includes(type));
    }
    return contentItems.filter(contentItem => !contentItem.type);

  }

}
