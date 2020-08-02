import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { MaterialModule } from '../../comum/material/material.module';
import { CCrudListComponent } from './c-crud-list.component';
import { CCrudListRoutingModule } from './c-crud-list-routing.module';
import { CCrudListEntrarGuard } from './c-crud-list-entrar.guard';
import { CCrudListResolver } from './c-crud-list.resolver';
import { CCrudListSairGuard } from './c-crud-list-sair.guard';

@NgModule({
  declarations: [CCrudListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,

    MaterialModule,
    CCrudListRoutingModule,
  ],
  providers: [
    CCrudListEntrarGuard,
    CCrudListResolver,
    CCrudListSairGuard,
  ]
})
export class CCrudListModule { }
