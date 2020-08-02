import { FrzPaginaNaoEncontradaModule } from './frz-pagina-nao-encontrada/frz-pagina-nao-encontrada.module';
import { NgModule } from '@angular/core';
import { FrzBarraAcoesModule } from './frz-barra-acoes/frz-barra-acoes.module';
import { FrzBotaoSubirModule } from './frz-botao-subir/frz-botao-subir.module';
import { FrzMirrorModule } from './frz-mirror/frz-mirror.module';

@NgModule({
    exports: [
        FrzBarraAcoesModule,
        FrzBotaoSubirModule,
        FrzPaginaNaoEncontradaModule,
        FrzMirrorModule,
    ],
})
export class FrzComponentesModule { }
