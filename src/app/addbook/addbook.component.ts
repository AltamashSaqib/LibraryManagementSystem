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
  editBook = {};

  constructor(private formBuilder: FormBuilder, private dataService: DataService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.dynamicForm = this.formBuilder.group({
          isbn: ['',Validators.required],
          title: ['',Validators.required],
          author: ['',Validators.required],
          price: ['',Validators.required]
      });

      this.route.paramMap.subscribe( param => {
        this.editBook = param["params"];
        if (Object.keys(this.editBook).length !== 0) {
        console.log('populating values' + JSON.stringify(this.editBook));
        this.dynamicForm.patchValue({
        isbn: this.editBook['isbn'],
        title: this.editBook['title'],
        author: this.editBook['author'],
        price: this.editBook['price'],
        });
        }
        });
    }
 
  get f(){
    return this.dynamicForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    
    if(this.dynamicForm.invalid)
    {
      return;
    }
   
    this.dataService.addBook(this.dynamicForm.value)
    .subscribe(data =>
    { alert('Book Saved successfully');
  }); 
    this.dynamicForm.reset();
    
};

updateBook()
{
  const book = this.dynamicForm.value;
  console.log(this.dynamicForm.value);
  const itemIndex = this.dynamicForm.value.isbn;
  console.log(this.dynamicForm.value.isbn);
  this.dataService.updateBook(book, itemIndex).subscribe(data =>{
  alert('Book Updated successfully');
});

};

}