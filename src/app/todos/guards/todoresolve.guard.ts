import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Todos } from '../service/todos';
import { TodosService } from '../service/todos.service';

@Injectable({
  providedIn: 'root'
})
export class TodoresolveGuard implements Resolve<Todos[]> {

  constructor(private todoService: TodosService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todos[]>  {
    return this.todoService.getTodoList();
  }
}
