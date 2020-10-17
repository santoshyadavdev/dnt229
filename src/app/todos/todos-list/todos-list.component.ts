import { Component, Input, OnInit } from '@angular/core';
import { Todos } from '../service/todos';

@Component({
  selector: 'dnt-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed', 'details'];
  @Input() todos: Todos[];
  constructor() { }

  ngOnInit(): void {
  }

}
