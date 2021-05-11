import { EntidadeId } from '../entidade-id';
import { ReceitaReferenciaAnaliseSoloParametro } from './receita_referencia_analise_solo_parametro';

export class ReceitaReferencia implements EntidadeId {

    public id: number;
    public nome: string;
    public receitaReferenciaAnaliseSoloParametroList: ReceitaReferenciaAnaliseSoloParametro[];

}
