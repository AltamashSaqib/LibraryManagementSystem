import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {

  bookList = [];

  constructor(private dataService: DataService, private router:Router,private route: ActivatedRoute) {
   /*
   this.bookList = dataService.getBooks();  */
    
   }

  ngOnInit(): void {
 
  }

  deleteBook(index)
  {
    this.bookList.splice(index,1);
  }

  
  EditDetails(isbn: number){
      this.router.navigate(['/addbook',isbn]);
  }
    

}
