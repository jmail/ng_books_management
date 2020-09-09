import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../Models/book.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookService {

    constructor(private http: HttpClient) {}

    public totalBooks = 0;

    getBooks(data: any): Observable<[]> {
        return this.http.get<any>(`${environment.apiUrl}/books`, {
            params: data
        }).pipe(
            map(resp => {
                this.totalBooks = resp.meta.total;
                return resp.data.map(one => new Book(one));
            })
        );
    }

    createBook(data: any): Observable<any> {
        const url = `${environment.apiUrl}/books`;
        return this.http.post<any>(url, data).pipe(
            map(resp => {
                return resp.data;
            }),
        );
    }

    updateBook(id: number, data: any): Observable<any> {
        const url = `${environment.apiUrl}/books/${id}`;
        return this.http.post<any>(url, data).pipe(
            map(resp => {
                return resp.data;
            }),
        );
    }

    deleteBook(id: number): Observable<any> {
        const url = `${environment.apiUrl}/books/${id}`;
        return this.http.delete<any>(url).pipe(
            map(resp => {
                return resp.data;
            }),
        );
    }
}
