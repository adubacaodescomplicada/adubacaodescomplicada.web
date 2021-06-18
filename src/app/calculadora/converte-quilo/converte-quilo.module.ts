import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ConverteQuiloComponent } from './converte-quilo.component';
import { ConverteQuiloService } from './converte-quilo.service';

@NgModule({
  declarations: [ConverteQuiloComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ConverteQuiloService,
    MatDialogModule
  ]
})
export class ConverteQuiloModule { }
