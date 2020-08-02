import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutorizarTrocarSenhaRoutingModule } from './autorizar-trocar-senha-routing.module';
import { AutorizarTrocarSenhaComponent } from './autorizar-trocar-senha.component';
import { AutorizarTrocarSenhaService } from './autorizar-trocar-senha.service';
import { AutorizarTrocarSenhaFormService } from './autorizar-trocar-senha-form.service';
import { AutorizarTrocarSenhaResolve } from './autorizar-trocar-senha.resolve';
import { FrzDirectivesModule } from '../../comum/directive/frz-directives.module';

@NgModule({
  declarations: [AutorizarTrocarSenhaComponent],
  imports: [
    CommonModule,
    AutorizarTrocarSenhaRoutingModule,
    ReactiveFormsModule,

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    FrzDirectivesModule,
  ],
  providers: [
    AutorizarTrocarSenhaService,
    AutorizarTrocarSenhaFormService,
    AutorizarTrocarSenhaResolve,
  ]
})
export class AutorizarTrocarSenhaModule { }
