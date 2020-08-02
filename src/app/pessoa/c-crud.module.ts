import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeModule } from '../comum/pipe/pipe.module';
import { FrzComponentesModule } from '../comum/frz-componentes/frz-componentes.module';
import { FrzDirectivesModule } from '../comum/directive/frz-directives.module';
import { CCrudComponent } from './c-crud.component';
import { CCrudRoutingModule } from './c-crud-routing.module';
import { CCrudEntrarGuard } from './c-crud-entrar.guard';
import { CCrudFormResolver } from './c-crud.resolver';
import { CCrudFormInserirResolver } from './form/c-crud-form-inserir.resolver';
import { CCrudFormEditarResolver } from './form/c-crud-form-editar.resolver';
import { CCrudFormVisualizarResolver } from './form/c-crud-form-visualizar.resolver';
import { CCrudSairGuard } from './c-crud-sair.guard';
import { CCrudRestService } from './c-crud-rest.service';
import { CCrudFormService } from './c-crud-form.service';

@NgModule({
  declarations: [CCrudComponent],
  imports: [
    CommonModule,

    CCrudRoutingModule,
    FrzComponentesModule,
    FrzDirectivesModule,
    PipeModule,
  ],
  providers: [
    CCrudEntrarGuard,
    CCrudFormResolver,
    CCrudFormInserirResolver,
    CCrudFormEditarResolver,
    CCrudFormVisualizarResolver,
    CCrudSairGuard,
    CCrudRestService,
    CCrudFormService,
  ]
})
export class CCrudModule { }
