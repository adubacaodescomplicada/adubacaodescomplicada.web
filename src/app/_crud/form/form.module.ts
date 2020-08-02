import { FormSairGuard } from './form-sair.guard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { MaterialModule } from '../../comum/material/material.module';
import { FormComponent } from './form.component';
import { FormEntrarGuard } from './form-entrar.guard';
import { FrzDirectivesModule } from '../../comum/directive/frz-directives.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    FormRoutingModule,
    FrzDirectivesModule,
  ],
  providers: [
    FormEntrarGuard,
    FormSairGuard,
  ]
})
export class FormModule { }
