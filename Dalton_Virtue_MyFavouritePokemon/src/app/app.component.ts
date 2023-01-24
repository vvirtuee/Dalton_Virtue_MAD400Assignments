import { Component } from '@angular/core';
import { ContentList } from './models/contentlist';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {

  contentList: ContentList;
  constructor(){

    this.contentList = new ContentList;
    this.contentList.addContent({id: 0,
      name: "Voltorb",
      description: "Electric Pokeball pokemon",
      author: "Game Freak",
      imgSrc: "voltorb.jpg",
      type: "Electric",
      tags: ["pokemon","ball"]})

      this.contentList.addContent({id: 1,
        name: "Gastly",
        description: "Ghost ball pokemon gaseous",
        author: "Game Freak",
        imgSrc: "gastly.png",
        type: "Ghost",
        tags: ["pokemon","ghost"]})

      this.contentList.addContent({id: 0,
        name: "Marowak",
        description: "Adult form of Cubone",
        author: "Game Freak",
        imgSrc: "marowak.png",
        type: "Normal",
        tags: ["bone"]})

      this.contentList.addContent({id: 0,
        name: "Psyduck",
        description: "Yellow duckling pokemon with insomnia",
        author: "Game Freak",
        imgSrc: "psyduck.png",
        type: "Water",
        tags: ["water","psychic","pokemon"]})
}



}

// //we are using SOME methods of the ContentList class

