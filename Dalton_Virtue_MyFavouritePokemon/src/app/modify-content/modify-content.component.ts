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
    //add a new IContent item to the server database
    this.content.addContent(this.pokemonToAdd).subscribe(pokemonFromServer => {
      this.pokemonToAdd = pokemonFromServer;
      //15.2
      //Clear all the input fields once IContent has been successfully added to the server.
      this.pokemonToAdd.title = "";
      this.pokemonToAdd.description = "";
      this.pokemonToAdd.imgSrc = "";
      this.pokemonToAdd.type ="";

    })
  }
}
