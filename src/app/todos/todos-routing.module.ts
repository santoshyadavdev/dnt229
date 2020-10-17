import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosAddComponent } from './todos-add/todos-add.component';
import { TodosDetailsComponent } from './todos-details/todos-details.component';
import { TodosComponent } from './todos.component';
import { TodoresolveGuard } from './guards/todoresolve.guard';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: TodosComponent,
    resolve: {
      todoList: TodoresolveGuard
    },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':todoid', component: TodosDetailsComponent },
      { path: 'task/add', component: TodosAddComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
