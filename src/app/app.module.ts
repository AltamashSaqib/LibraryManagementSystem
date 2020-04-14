import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { UserComponent } from './user.component';*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ShowbookComponent } from './showbook/showbook.component';
import { EditbookComponent } from './editbook/editbook.component';

@NgModule({
  declarations: [
    AppComponent,
    /*UserComponent,*/
    NavbarComponent,
    AddbookComponent,
    ShowbookComponent,
    routingComponent,
    EditbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
