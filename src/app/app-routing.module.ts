import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ShowbookComponent } from './showbook/showbook.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  {path:'addbook', component: AddbookComponent},
  {path: 'showbook',component: ShowbookComponent},
  {path: 'addbook/:id', component: AddbookComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AddbookComponent,ShowbookComponent,EditbookComponent]