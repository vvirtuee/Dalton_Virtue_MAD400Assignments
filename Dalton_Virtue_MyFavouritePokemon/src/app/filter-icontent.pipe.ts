import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from 'src/app/models/icontent';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {

  transform(pokemons?: IContent[]): IContent[] {
    return pokemons?.filter(p => {
      return p.tags?.length;
    }) ?? [];
  }

}
