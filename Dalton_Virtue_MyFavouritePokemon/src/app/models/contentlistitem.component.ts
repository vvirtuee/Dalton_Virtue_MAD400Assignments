// This is our main component class called
// as 'CustomerComponent'
  
// Here we have imported 'Component' 
// module from Angular library
import { Component } from '@angular/core';
import { IContent } from './icontent';
  
@Component({
    selector: 'app-content-list-item',
    templateUrl: './content-list-item.component.html',
    styleUrls: ['./content-list-item.component.css']
})

export class ContentListItemComponent{
    ic: IContent;
    constructor(ic: IContent){
        this.ic = ic;
    }
}