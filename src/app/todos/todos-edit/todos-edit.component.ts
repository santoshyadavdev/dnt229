import { Component, OnInit } from '@angular/core';
import { Todos } from '../service/todos';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'dnt-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css']
})
export class TodosEditComponent implements OnInit {

  todo: Todos = {
    id: 1,
    userId: 1,
    title: 'Test Title',
    completed: false
  };

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

  editTodo(): void {
    this.todoService.updateTodo(this.todo).subscribe(res => console.log(res));
  }

}
