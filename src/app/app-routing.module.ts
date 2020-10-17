import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { AuthGuard } from './guards/auth.guard';
import { TableDemoComponent } from './table-demo/table-demo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableDemoComponent },
  {
    path: 'todos',
    canLoad: [AuthGuard],
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  },
  { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'order',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
