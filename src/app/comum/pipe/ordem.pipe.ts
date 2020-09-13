import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'ordem',
  pure: false
})
export class OrdemPipe implements PipeTransform {
  transform(items: any[], campo: string): any {
    items.sort((a: any, b: any) => {
      if (a.get(campo).value < b.get(campo).value) {
        return -1;
      } else if (a.get(campo).value > b.get(campo).value) {
        return 1;
      } else {
        return 0;
      }
    });
    return items;
  }
}
