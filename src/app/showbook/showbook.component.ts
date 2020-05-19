import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {

  bookList : any;

  constructor(private dataService: DataService, private router:Router,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dataService.getBooks()
  .subscribe(data =>{
    this.bookList = data;
  });
 
  }

  deleteBooks(index:number)
  {
    this.dataService.deleteBook(index)
    .subscribe(data =>{
      this.bookList = this.bookList.filter(i => i!== index);
    })
  };

  
  EditDetails(book){
      this.router.navigate(['/addbook',book]);
  }
    

}
