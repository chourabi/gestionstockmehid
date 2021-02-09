import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

import { MagazinsComponent } from './magazins.component';

const routes: Routes = [
  { path: '', component: MagazinsComponent , children:[
    { path:'' , component:ListComponent },
    { path:'list' , component:ListComponent },
    { path:'add' , component:AddComponent },
    
    
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagazinsRoutingModule { }