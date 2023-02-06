import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent{

  pokemonArray: IContent[] = [];
  //adding service using dependency injection
  constructor(private service: PokemonService){}

  //use service to retrieve array of data
  ngOnInit(): void {
    this.service.getContent().subscribe((IContentArrayOfData: IContent[]) => {
      this.pokemonArray = IContentArrayOfData;
    });
  }
}
