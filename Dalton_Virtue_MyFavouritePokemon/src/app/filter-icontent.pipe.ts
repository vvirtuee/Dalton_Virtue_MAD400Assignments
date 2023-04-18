import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from 'src/app/models/icontent';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {

  //The method should return a filtered version of the input array of IContent, only
  //returning IContent that has its type equal to a string passed to the pipe.
  transform(pokemons?: IContent[]): IContent[] {
    return pokemons?.filter(p => {
      return p.type?.length;
    }) ?? pokemons;
  }

}
