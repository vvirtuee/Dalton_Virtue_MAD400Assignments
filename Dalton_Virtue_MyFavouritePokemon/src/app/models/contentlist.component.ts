// This is our main component class called
// as 'CustomerComponent'
  
// Here we have imported 'Component' 
// module from Angular library
import { Component, Input } from '@angular/core';
import { IContent } from './icontent';
  
@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent{
    @Input() contentList: IContent[] = []
    constructor(){
        this.contentList.push(
            {id: 0,
                name: "Voltorb",
                description: "Electric Pokeball pokemon",
                author: "Game Freak",
                imgSrc: "voltorb.jpg",
                type: "Electric",
                tags: ["pokemon","ball"]},
            {id: 1,
                name: "Gastly",
                description: "Ghost ball pokemon gaseous",
                author: "Game Freak",
                imgSrc: "gastly.png",
                type: "Ghost",
                tags: ["pokemon","ghost"]},
            {id: 2,
                name: "Marowak",
                description: "Adult form of Cubone",
                author: "Game Freak",
                imgSrc: "marowak.png",
                type: "Normal",
                tags: ["bone"]},
            {id: 3,
                name: "Psyduck",
                description: "Yellow duckling pokemon with insomnia",
                author: "Game Freak",
                imgSrc: "psyduck.png",
                type: "Water",
                tags: ["water","psychic","pokemon"]}
            )
    }
}