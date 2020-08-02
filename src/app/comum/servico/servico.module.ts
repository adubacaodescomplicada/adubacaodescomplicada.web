import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxViacepService } from '@brunoc/ngx-viacep';
import { DomService } from './dom.service';
import { ConsultaCepService } from './consulta-cep.service';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
  ],
  providers: [
    DomService,
    NgxViacepService,
    ConsultaCepService,
    LocalStorageService,
  ]
})
export class ServicoModule { }
