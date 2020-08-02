import { CrudSairGuard } from './crud-sair.guard';
import { PipeModule } from './../comum/pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudEntrarGuard } from './crud-entrar.guard';
import { CrudFormResolver } from './crud.resolver';
import { FormInserirResolver } from './form/form-inserir.resolver';
import { FormEditarResolver } from './form/form-editar.resolver';
import { FormVisualizarResolver } from './form/form-visualizar.resolver';
import { CrudRestService } from './crud-rest.service';
import { CrudFormService } from './crud-form.service';
import { FrzComponentesModule } from '../comum/frz-componentes/frz-componentes.module';
import { FrzDirectivesModule } from '../comum/directive/frz-directives.module';

@NgModule({
  declarations: [CrudComponent],
  imports: [
    CommonModule,

    CrudRoutingModule,
    FrzComponentesModule,
    FrzDirectivesModule,
    PipeModule,
  ],
  providers: [
    CrudEntrarGuard,
    CrudFormResolver,
    FormInserirResolver,
    FormEditarResolver,
    FormVisualizarResolver,
    CrudSairGuard,
    CrudRestService,
    CrudFormService,
  ]
})
export class CrudModule { }
