import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  pokemonToAdd: IContent = {
    title: "",
    description: "",
    imgSrc: "",
    type: "",
  }
  constructor(private content: PokemonService) {}
  addContentToServer(): void {
    console.log(this.pokemonToAdd);
    this.content.addContent(this.pokemonToAdd).subscribe(pokemonFromServer => {
      this.pokemonToAdd = pokemonFromServer;
    })
  }
}
