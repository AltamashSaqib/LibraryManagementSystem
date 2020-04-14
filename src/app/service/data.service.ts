import { Injectable } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private bookList = [];

  constructor() { }


  public  addBook(book) {
    this.bookList.push(book);
  }

  public  getBooks() {
    return this.bookList;
  }

  public getBookId(isbn:any) {
        if(isbn){
          return this.bookList.filter(item => item.isbn == isbn);
        }
      }
      

  public deleteBook()
  {
      return this.bookList.pop();
  }
}
