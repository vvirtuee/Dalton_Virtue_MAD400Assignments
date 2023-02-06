import { Injectable } from '@angular/core';
import { IContent } from '../models/icontent';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  //return an observable of the IContent array from mock-conent file in data folder
  getContent(): Observable<IContent[]> {
    return of(CONTENT);
  }

  //return an individual data item based on the index number given
  getContentItem(index: number): Observable<IContent> {
    return of(CONTENT[index]);
  }
}
