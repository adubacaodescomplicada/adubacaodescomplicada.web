import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../comum/material/material.module';
import { FrzDirectivesModule } from '../../comum/directive/frz-directives.module';
import { CCrudFiltroComponent } from './c-crud-filtro.component';
import { CCrudFiltroRoutingModule } from './c-crud-filtro-routing.module';
import { CCrudFiltroEntrarGuard } from './c-crud-filtro-entrar.guard';
import { CCrudFiltroResolver } from './c-crud-filtro.resolver';
import { CCrudFiltroSairGuard } from './c-crud-filtro-sair.guard';

@NgModule({
  declarations: [CCrudFiltroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    FrzDirectivesModule,

    CCrudFiltroRoutingModule,
  ],
  providers: [
    CCrudFiltroEntrarGuard,
    CCrudFiltroResolver,
    CCrudFiltroSairGuard,
  ]
})
export class CCrudFiltroModule { }
