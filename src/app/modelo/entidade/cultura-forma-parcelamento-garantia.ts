import { EntidadeId } from '../entidade-id';
import { Garantia } from './garantia';

export class CulturaFormaParcelamentoGarantia implements EntidadeId {

    public id: number;
    public garantia: Garantia;
    public quantidade: number;
 
}
