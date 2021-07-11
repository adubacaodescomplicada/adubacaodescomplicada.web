import { EntidadeId } from '../entidade-id';
import { ReceitaReferenciaAnaliseSoloParametro } from './receita-referencia-analise-solo-parametro';

export class ReceitaReferencia implements EntidadeId {

    public id: number;
    public nome: string;
    public receitaReferenciaAnaliseSoloParametroList: ReceitaReferenciaAnaliseSoloParametro[];

}
