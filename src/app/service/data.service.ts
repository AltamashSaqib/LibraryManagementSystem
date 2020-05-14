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

 // private bookUrl = '/api';

  public addBook(book){
    //this.bookList.push(book);
    return this.http.post(this.addUrl,book);
  }

  public  getBooks() {
    return this.http.get(this.showUrl);
  }

  public deleteBook(index)
  {
    return this.http.delete(this.deleteUrl+"/"+index);
    console.log("abcd");
  }

  public getBookId(isbn:any) {
    if(isbn){
      return this.bookList.filter(item => item.isbn == isbn);
    }
  }

  public updateBook(book, index) {
    this.bookList[index] = book;
   }

/*
  public  addBook(book) {
    this.bookList.push(book);
  }

  public  getBooks() {
    return this.bookList;
  }

  public deleteBook()
  {
      return this.bookList.pop();
  }

  public getBookId(isbn:any) {
        if(isbn){
          return this.bookList.filter(item => item.isbn == isbn);
        }
      }
      
  public updateBook(book, index) {
   this.bookList[index] = book;
  }
*/
}
