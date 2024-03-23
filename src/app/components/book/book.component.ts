import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  book : Book = {

    id : 1,
    title : "bootcamp-Angular",
    author : "Glauco",
    price : 300.00
    
  }
}