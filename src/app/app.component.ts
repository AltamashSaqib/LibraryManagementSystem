import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibSystem';
  constructor(){}

 /* constructor( private http: HttpClient) {
    this.
  }

  demoService() {
        const res = this.http.get('https://reqres.in/api/users?page=2').subscribe((da)=>{
          console.log(da)
        })
  }*/
}
