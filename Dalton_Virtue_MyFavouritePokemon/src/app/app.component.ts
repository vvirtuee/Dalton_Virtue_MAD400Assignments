import { Component } from '@angular/core';
import { IContent } from './models/icontent';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public service: PokemonService = new PokemonService();
  constructor(service: PokemonService){}
}
