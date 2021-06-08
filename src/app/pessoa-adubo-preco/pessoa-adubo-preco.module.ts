import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaAduboPrecoRoutingModule } from './pessoa-adubo-preco-routing.module';
import { PessoaAduboPrecoComponent } from './pessoa-adubo-preco.component';

@NgModule({
  declarations: [PessoaAduboPrecoComponent],
  imports: [
    CommonModule,
    PessoaAduboPrecoRoutingModule
  ]
})
export class PessoaAduboPrecoModule { }
