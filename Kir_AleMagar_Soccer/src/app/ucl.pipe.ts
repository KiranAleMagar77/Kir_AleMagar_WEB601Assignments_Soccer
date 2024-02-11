import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucl',
  standalone: true
})
export class UclPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
