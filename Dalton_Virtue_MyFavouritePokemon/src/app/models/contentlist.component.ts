// This is our main component class called
// as 'CustomerComponent'
  
// Here we have imported 'Component' 
// module from Angular library
import { Component } from '@angular/core';
import { IContent } from './icontent';
  
@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: ['./content-list.component.css']
})

export class ContentListComponent{
    contentList: IContent[] = [
        new IContent("Gastly", "Ghost ball pokemon gaseous", "Game Freak", "gastly.png", "Ghost", ["pokemon","ghost"]),
        new IContent("Marowak","Adult form of Cubone","Game Freak","marowak.png", "Normal",["bone"]),
        new IContent("Psyduck","Yellow duckling pokemon with insomnia","Game Freak", "psyduck.png", "Water", ["water","psychic","pokemon"]),
        new IContent("Diglett", "Weird mole type Pokemon", "Game Freak", "diglett.png", "Ground", ["pokemon","ground"])
    ];
    constructor(){
    }
}