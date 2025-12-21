import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
}

@Injectable({
  providedIn: 'root',
})
export class Book {
  private apiURL = `${environment.apiBaseUrl}/books`;

  constructor(private http: HttpClient) {}

  getAllBooks(author?: string, genre?: string): Observable<Book[]> {
    let params = new HttpParams();
    if (author) params = params.set('author', author);
    if (genre) params = params.set('genre', genre);
    return this.http.get<Book[]>(this.apiURL, { params });
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiURL, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiURL}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.apiURL}/${this.id}`);
  }
}
