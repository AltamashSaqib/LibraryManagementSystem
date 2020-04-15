import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';
import {ActivatedRoute} from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  addBookData = [];
  newItem = [];

  constructor(private formBuilder: FormBuilder, private dataService: DataService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          isbn: [''],
          title: [''],
          author: [''],
          price: ['']
      });

      this.route.params.subscribe((data: any) => {
        let bookid = data['id'] || null;
        if(bookid)
        {
          this.getBook(bookid);
        }
      });
  }

  getBook(id:any)
  {
    const item = this.dataService.getBookId(id)[0];
    this.dynamicForm.patchValue({
      isbn: item['isbn'],
      title: item['title'],
      author: item['author'],
      price: item['price']
    });
  }

  onSubmit() {
    this.submitted = true;
    this.dataService.addBook(this.dynamicForm.value);
    this.addBookData.push(this.dynamicForm.value);
    this.dynamicForm.reset();
    // display form values on success
    alert('Book Saved successfully');
}

updateBook()
{
  const book = this.dynamicForm.value;
  const itemIndex = this.dataService.getBooks().findIndex(item => item.isbn === this.dynamicForm.value.isbn);
  this.dataService.updateBook(book, itemIndex);
  alert('Book Updated successfully');
}
}