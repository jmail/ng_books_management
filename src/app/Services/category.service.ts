import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../Models/category.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoryService {

    constructor(private http: HttpClient) {}

    getCategories(): Observable<[]> {
        return this.http.get<any>(`${environment.apiUrl}/categories`).pipe(
            map(resp => {
                return resp.data.map(one => new Category(one));
            })
        );
    }
}
