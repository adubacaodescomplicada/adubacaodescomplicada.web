import { NgModule } from '@angular/core';

import { TrocarSenhaModule } from './trocar-senha/trocar-senha.module';
import { RecuperarSenhaModule } from './recuperar-senha/recuperar-senha.module';
import { LoginModule } from './login/login.module';
import { AutorizarTrocarSenhaModule } from './autorizar-trocar-senha/autorizar-trocar-senha.module';

@NgModule({
    exports: [
        LoginModule,
        AutorizarTrocarSenhaModule,
        RecuperarSenhaModule,
        TrocarSenhaModule,
    ],
    imports: [
    ]
})
export class SegurancaModule {}
