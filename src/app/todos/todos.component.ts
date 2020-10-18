import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodosService } from './service/todos.service';
import { Todos } from './service/todos';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from '../services/logger.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dnt-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {

  todoList: Todos[];

  todoList$: Observable<Todos[]>;

  subscription: Subscription;

  constructor(private todoService: TodosService,
    private loggerService: LoggerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.todoService.getTodoList().subscribe(res => this.todoList = res);
    // this.subscription = this.route.data.subscribe((res) => this.todoList = res.todoList);
    this.todoList$ = this.route.data.pipe(
      map((res) => res.todoList)
    );
  }



  updateTodo() {
    const todo: Todos = {
      id: 1,
      userId: 1,
      title: 'Test Title',
      completed: true
    };

    this.todoService.updateTodo(todo).subscribe(res => console.log(res));
  }

  deleteTodo() {
    const todo: Todos = {
      id: 2,
      userId: 1,
      title: 'Test Title',
      completed: true
    };
    this.todoService.deleteTodo(todo).subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('on destroy is called');
  }

}
