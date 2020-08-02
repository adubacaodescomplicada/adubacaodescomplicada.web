import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../comum/material/material.module';
import { FrzDirectivesModule } from '../../comum/directive/frz-directives.module';
import { CCrudFormComponent } from './c-crud-form.component';
import { CCrudFormRoutingModule } from './c-crud-form-routing.module';
import { CCrudFormEntrarGuard } from './c-crud-form-entrar.guard';
import { CCrudFormSairGuard } from './c-crud-form-sair.guard';

@NgModule({
  declarations: [CCrudFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    CCrudFormRoutingModule,
    FrzDirectivesModule,
  ],
  providers: [
    CCrudFormEntrarGuard,
    CCrudFormSairGuard,
  ]
})
export class CCrudFormModule { }
