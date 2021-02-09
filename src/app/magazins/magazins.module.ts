import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagazinsRoutingModule } from './magazins-routing.module';
import { MagazinsComponent } from './magazins.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MagazinsComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    MagazinsRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class MagazinsModule { }
