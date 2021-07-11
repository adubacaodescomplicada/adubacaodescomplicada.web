import { AnaliseSoloParametro } from '../modelo/entidade/analise-solo-parametro';
import { UnidadeMedida } from '../modelo/entidade/unidade-medida';

export class ReceitaAnaliseSoloParametro {

    id: number;
    analiseSoloParametro: AnaliseSoloParametro;
    valor: number;
    avaliacao: string;
    unidadeMedida: UnidadeMedida;
}
