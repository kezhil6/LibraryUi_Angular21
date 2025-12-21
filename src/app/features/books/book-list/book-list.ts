import { Component, OnInit } from '@angular/core';
import { Book } from '../../../core/services/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  books: Book[] = [];

  constructor(private bookServie: Book) {}

  ngOnInit(): void {
    this.loadAllBooks('', '');
  }

  loadAllBooks(author?: string, genre?: string): void {
    this.bookServie.getAllBooks(author, genre).subscribe({
      next: (data) => (this.books = data),
      error: (err) => console.error('Error fetching books:', err),
    });
  }
}
