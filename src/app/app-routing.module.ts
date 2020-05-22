import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { ShowbookComponent } from './showbook/showbook.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'addbook', component: AddbookComponent},
  {path: 'showbook',component: ShowbookComponent},
  {path: 'addbook/:id', component: AddbookComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AddbookComponent,ShowbookComponent]