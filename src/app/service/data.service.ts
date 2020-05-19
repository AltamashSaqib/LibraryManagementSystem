import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bookList = [];

  constructor(private http:HttpClient) { }

  private addUrl = 'http://localhost:8080/addBooks';
  private showUrl = 'http://localhost:8080/getBooks';
  private deleteUrl = 'http://localhost:8080/deleteBooks';
  private idUrl = 'http://localhost:8080/books';
  private updateUrl = 'http://localhost:8080/updateBooks';


  public addBook(book){
    return this.http.post(this.addUrl,book);
  }

  public  getBooks() {
    return this.http.get(this.showUrl);
  }

  public deleteBook(index)
  {
    return this.http.delete(this.deleteUrl+"/"+index);
  }

  public getBookId(isbn) {
    if(isbn){
      return this.http.get(this.idUrl+"/"+isbn);
    }
  }

  public updateBook(book, index) {
    console.log(book);
    return this.http.put(this.updateUrl+"/"+index,book);
   }
  }