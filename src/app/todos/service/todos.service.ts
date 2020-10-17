import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Todos } from './todos';
import { Observable } from 'rxjs';
import { Photos } from './photos';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  endPoint = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<Todos[]> {
    return this.http.get<Todos[]>(`${this.endPoint}/todos`, {
      headers: new HttpHeaders().set('apiKey', 'sfsdhskghkjhdfds')
    });
  }

  addTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(`${this.endPoint}/todos`, todo, {
      headers: new HttpHeaders().set('apiKey', 'sfsdhskghkjhdfds')
    });
  }

  updateTodo(todo: Todos): Observable<Todos> {
    return this.http.put<Todos>(`${this.endPoint}/todos/${todo.id}`, todo);
  }

  deleteTodo(todo: Todos) {
    return this.http.delete(`${this.endPoint}/todos/${todo.id}`);
  }

  getPhotos() {
    // this.http.get(`${this.endPoint}/photos`);
    const photoRequest = new HttpRequest('GET', `${this.endPoint}/photos`, {
      reportProgress: true
    });

    return this.http.request<Photos[]>(photoRequest);
  }


}

// GET
// POST
// PUT and PATCH
// DELETE
// JSONP
// DRY (Dont Repeat Yourself)
