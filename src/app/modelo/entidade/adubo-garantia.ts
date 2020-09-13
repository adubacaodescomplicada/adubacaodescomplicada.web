import { EntidadeId } from '../entidade-id';
import { Garantia } from './garantia';

export class AduboGarantia implements EntidadeId {

    public id: number;
    public garantia: Garantia;
    public valor: string;
    public descricao: string;

}
