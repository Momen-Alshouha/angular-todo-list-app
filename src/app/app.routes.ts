// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListManagerComponent } from './list-manager/list-manager.component';

export const routes: Routes = [
  {
    path: 'list-manager',
    component: ListManagerComponent,
  },
  { path: '', redirectTo: 'list-manager', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
