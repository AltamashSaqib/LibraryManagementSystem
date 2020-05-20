import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bookList = [];

  constructor(private http:HttpClient) { }


  public addBook(book){
    return this.http.post(environment.api_url+'/addBooks',book);
  }

  public  getBooks() {
    return this.http.get(environment.api_url+'/getBooks');
  }

  public deleteBook(index)
  {
    return this.http.delete(environment.api_url+'/deleteBooks'+"/"+index);
  }

  public getBookId(isbn) {
    if(isbn){
      return this.http.get(environment.api_url+'/books'+"/"+isbn);
    }
  }

  public updateBook(book, index) {
    console.log(book);
    return this.http.put(environment.api_url+'/updateBooks'+"/"+index,book);
   }
  }