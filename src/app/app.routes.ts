// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
//import { TodoListComponent } from './todo-list/todo-list.component';
//import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'login',component:LoginComponent
      }, 
      {
        path:'register',component:RegisterComponent
      },
      {
        path:'list-manager',component:ListManagerComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
