import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columns: string[] = [];

  @Input() list: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
