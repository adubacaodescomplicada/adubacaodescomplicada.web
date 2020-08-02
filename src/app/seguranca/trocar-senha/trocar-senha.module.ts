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

import { TrocarSenhaRoutingModule } from './trocar-senha-routing.module';
import { TrocarSenhaComponent } from './trocar-senha.component';
import { TrocarSenhaService } from './trocar-senha.service';
import { TrocarSenhaFormService } from './trocar-senha-form.service';
import { TrocarSenhaResolve } from './trocar-senha.resolve';
import { FrzDirectivesModule } from '../../comum/directive/frz-directives.module';


@NgModule({
  declarations: [TrocarSenhaComponent],
  imports: [
    CommonModule,
    TrocarSenhaRoutingModule,
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
    TrocarSenhaService,
    TrocarSenhaFormService,
    TrocarSenhaResolve,
  ]
})
export class TrocarSenhaModule { }
