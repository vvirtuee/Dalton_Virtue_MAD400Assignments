import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CONTENT } from '../data/mock-content';
import { IContent } from '../models/icontent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    return {
      CONTENT
    };
    let pokemons: IContent[] = CONTENT;
    return {pokemons};
  }
}
