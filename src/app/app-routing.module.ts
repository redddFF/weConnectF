import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { EditContentComponent } from './edit-content/edit-content.component';
import { ListContentComponent } from './list-content/list-content.component';

const routes: Routes = [
  {
    path:'',component:ListContentComponent
  },
  {
    path:'add-content',component:AddContentComponent
  },
  {
    path:'list-content',component:ListContentComponent
  },
  {
    path:'edit-content/:id',component:EditContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
