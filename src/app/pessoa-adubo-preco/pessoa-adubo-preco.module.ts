import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaAduboPrecoRoutingModule } from './pessoa-adubo-preco-routing.module';
import { PessoaAduboPrecoComponent } from './pessoa-adubo-preco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaAduboPrecoFormService } from './pessoa-adubo-preco-form.service';
import { PipeModule } from '../comum/pipe/pipe.module';

@NgModule({
  declarations: [PessoaAduboPrecoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PessoaAduboPrecoRoutingModule,
    PipeModule,
  ],
  providers: [PessoaAduboPrecoFormService]
})
export class PessoaAduboPrecoModule { }
