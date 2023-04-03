import { Injectable } from '@angular/core';
import { IContent } from '../models/icontent';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  /*
  //return an observable of the IContent array from mock-conent file in data folder
  getContent(): Observable<IContent[]> {
    return of(CONTENT);
  }

  //return an individual data item based on the index number given (9.1)

  //9.1 ~ method that accepts a number and returns the IContent item in the array that contains the same id as the number parameter 
  //      (NOT the item in the array at that index)
  getContentItem(index: number): Observable<IContent> {
    return of(CONTENT[index]);
  }

  //9.2 ~ method that accepts an IContent item as an input, adds the item to the array, and returns the array after the new item is added
  addContentItem(contentItem: IContent): IContent[]{
    //pushing item to array which is an observable of the IContent item provided
    CONTENT.push(
      { id: contentItem.id,
        title: contentItem.title,
        description: contentItem.description ? contentItem.description : "",
        author: contentItem.author,
        imgSrc: contentItem.imgSrc ? contentItem.imgSrc : "",
        type: contentItem.type,
        tags: contentItem.tags ? contentItem.tags : [""]
      });
    return CONTENT;
  }
  //9.3 ~ method that accepts an IContent item as an input, updates an existing item in the array that has the same id as the input
  //      parameter's id, and returns the array after the IContent item has been updated
  updateContentItem(contentItem: IContent): IContent[]{
    var id = contentItem.id;
    CONTENT[id] = { id: contentItem.id,
      title: contentItem.title,
      description: contentItem.description ? contentItem.description : "",
      author: contentItem.author,
      imgSrc: contentItem.imgSrc ? contentItem.imgSrc : "",
      type: contentItem.type,
      tags: contentItem.tags ? contentItem.tags : [""]
    };
    return CONTENT;
  }
  //9,4 ~ method that accepts a number, removes the IContent item from the array that has the same id as the input number parameter, and
  //      returns the IContent item that was removed
  removeContentItem(index: number): IContent{
    var removedElement = CONTENT[index];
    CONTENT.splice(index,1);
    return removedElement;
  }

  */

  //Assignment 5 ~ 9
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient){}

  //CRUD operations
  //READ ops
  getContent(): Observable<IContent[]> {
    return this.http.get<IContent[]>("api/pokemons");
  }
  getContentItem(index: number): Observable<IContent> {
    return this.http.get<IContent>("api/pokemons/" + index)
  }
  //CREATE op
  addContent(singlePokemon: IContent): Observable<IContent> {
    return this.http.post<IContent>("api/pokemons", singlePokemon, this.httpOptions);
  }

  //DELETE op
  removeContent(index: number): Observable<IContent>{
    return this.http.delete("api/pokemons" + index);
  }

  //UPDATE op
  updateContent(index: number): Observable<IContent>{
    return this.http.updateContentItem(index);
  }
}
