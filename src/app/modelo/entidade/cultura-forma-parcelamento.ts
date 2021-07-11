import { EntidadeId } from '../entidade-id';
import { CulturaFormaParcelamentoGarantia } from './cultura-forma-parcelamento-garantia';

export class CulturaFormaParcelamento implements EntidadeId {

    public id: number;
    public periodoInicial: number;
    public periodoFinal: number;
    public ordem: number;
    public culturaFormaParcelamentoGarantiaList: CulturaFormaParcelamentoGarantia[];

}
