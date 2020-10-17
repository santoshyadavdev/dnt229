import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Todos } from '../service/todos';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'dnt-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  todo: Todos = {
    userId: 0,
    title: '',
    completed: false
  };

  constructor(private todoService: TodosService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: Params) => console.log(res.id));
    // this.route.paramMap.subscribe(res => console.log(res.get('userid')));
  }

  addTodo(todoForm: NgForm) {

    this.todoService.addTodo(this.todo).subscribe(res => {
      console.log(res);
      todoForm.resetForm({ userId: 0, title: 'Default Title', completed: true });
    });
  }

}
