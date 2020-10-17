import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dnt-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {

  data = [
    {
      id: 1, name : 'test', address: 'test'
    },
    {
      id: 2, name : 'test2', address: 'test2'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
