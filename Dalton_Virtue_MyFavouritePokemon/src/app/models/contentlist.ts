import { IContent } from './icontent';

export class ContentList {
    //empty IContent array
    private _content: IContent[] = [];
    
    //default constructor
    constructor() {
        this._content = [];
    }

    //getter method
    get icontent(): IContent[] {
        return this._content;
    }

    addContent(content: IContent): void {
        //push 1 new element to array
        this._content.push(content);
    }

    //gets length
    getLength() {
        return this._content.length;
    }

    toString(index: number): any {
        const item = this._content[index];

        let html = `<div style="border:2px solid black;"><ul>`;
        html += `<li>${item.name}</li>`;
        if (item.description) {
            html += `<li>${item.description}</li>`;
        }
        html += `<li>By ${item.author}</li>`;
       
        if (item.imgSrc) {
            html += `<li><img src='${item.imgSrc}'/></li>`;
        }
        html += `<li> ${item.type}</li>`;

        if(item.tags != null){
            for(var i = 0; i < item.tags.length; i++){
                html += `<li> ${item.tags[i]} </li>`;
            }
        }
        html += `</ul></div>`;
        
       
        return html;
    }
    
}
