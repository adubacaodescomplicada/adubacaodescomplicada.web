import { FiltroSairGuard } from './filtro-sair.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FiltroRoutingModule } from './filtro-routing.module';
import { MaterialModule } from '../../comum/material/material.module';
import { FiltroComponent } from './filtro.component';
import { FiltroEntrarGuard } from './filtro-entrar.guard';
import { FiltroResolver } from './filtro.resolver';
import { FrzDirectivesModule } from '../../comum/directive/frz-directives.module';

@NgModule({
  declarations: [FiltroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    FiltroRoutingModule,
    FrzDirectivesModule,
  ],
  providers: [
    FiltroEntrarGuard,
    FiltroResolver,
    FiltroSairGuard,
  ]
})
export class FiltroModule { }
