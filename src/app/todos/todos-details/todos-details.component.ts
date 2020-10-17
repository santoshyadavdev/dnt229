import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dnt-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent implements OnInit {

  id: number = 0;

  id$ = this.route.paramMap.pipe(
    map((key) => key.get('todoid'))
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((key) => this.id = + key.get('todoid'));

  }

}
