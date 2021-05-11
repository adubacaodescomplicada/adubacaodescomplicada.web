import { EntidadeId } from '../entidade-id';
import { AnaliseSoloParametro } from './analise-solo-parametro';

export class ReceitaReferenciaAnaliseSoloParametro implements EntidadeId {

    public id: number;
    public analiseSoloParametroList: AnaliseSoloParametro[];

}
