import { ListSairGuard } from './list-sair.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { ListComponent } from './list.component';
import { ListEntrarGuard } from './list-entrar.guard';
import { ListResolver } from './list.resolver';
import { ListRoutingModule } from './list-routing.module';
import { MaterialModule } from './../../comum/material/material.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,

    MaterialModule,
    ListRoutingModule,
  ],
  providers: [
    ListEntrarGuard,
    ListResolver,
    ListSairGuard,
  ]
})
export class ListModule { }
