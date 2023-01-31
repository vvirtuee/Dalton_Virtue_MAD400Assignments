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

}