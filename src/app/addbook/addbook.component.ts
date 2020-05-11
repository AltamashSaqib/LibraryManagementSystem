import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private dataService: DataService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          isbn: ['',Validators.required],
          title: ['',Validators.required],
          author: ['',Validators.required],
          price: ['',Validators.required]
      });

    /* 
    *Fetching ID of particular row for update*

    this.route.params.subscribe((data: any) => {
        let bookid = data['id'] || null;
        if(bookid)
        {
          this.getBook(bookid);
        }
      }); */
  }
  

  get f(){
    return this.dynamicForm.controls;
  }
/*
*Fetching the Existing data to update*

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
*/
  onSubmit(): void {
    this.submitted = true;
    
    if(this.dynamicForm.invalid)
    {
      return;
    }
   // this.dataService.addBook(this.dynamicForm.value);
    //this.addBookData.push(this.dynamicForm.value);

    this.dataService.addBook(this.dynamicForm.value)
    .subscribe(data =>
    { alert('Book Saved successfully');
  }); 
    this.dynamicForm.reset();
    // display form values on success
    
};
/*
*Update book code*

updateBook()
{
  const book = this.dynamicForm.value;
  const itemIndex = this.dataService.getBooks().findIndex(item => item.isbn === this.dynamicForm.value.isbn);
  this.dataService.updateBook(book, itemIndex);
  alert('Book Updated successfully');
}
*/


}