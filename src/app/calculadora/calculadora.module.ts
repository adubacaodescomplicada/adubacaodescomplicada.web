import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalculadoraService } from './calculadora.service';
import { ConverteQuiloModule } from './converte-quilo/converte-quilo.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ConverteQuiloModule,
  ],
  providers: [CalculadoraService]
})
export class CalculadoraModule { }
