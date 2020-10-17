import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosEditComponent } from './todos-edit/todos-edit.component';
import { TodosDetailsComponent } from './todos-details/todos-details.component';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodosAddComponent,
    TodosEditComponent,
    PhotosComponent,
    TodosDetailsComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TodosModule { }
