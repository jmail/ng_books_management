import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'books'},
  {path: 'books', component: BooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
