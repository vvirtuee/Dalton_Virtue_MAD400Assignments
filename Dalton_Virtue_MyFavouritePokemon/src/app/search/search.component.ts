import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  id?: number;
  testID?: number;
  service: PokemonService;

  constructor(service: PokemonService) {
    this.id = -1;
    this.testID = 0;
    this.service = service;
    // this.inputElement = document.querySelector("input");

  }

  onClick(inputTagValue: string): void {
    console.log('The value of the input is: ', inputTagValue);
    this.testID = parseInt(inputTagValue);
    var item = this.service.getContentItem(this.testID);
    console.log("item: " + item);
  }
}
