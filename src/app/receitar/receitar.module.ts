import { PipeModule } from './../comum/pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitarRoutingModule } from './receitar-routing.module';
import { ReceitarComponent } from './receitar.component';
import { MaterialModule } from '../comum/material/material.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReceitarService } from './receitar.service';
import { ReceitarResolver } from './receitar.resolver';

@NgModule({
  declarations: [ReceitarComponent],
  imports: [
    CommonModule,
    ReceitarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatExpansionModule,
    MatDatepickerModule,
    PipeModule,
  ],
  providers: [
    ReceitarService,
    ReceitarResolver
  ]
})
export class ReceitarModule { }
