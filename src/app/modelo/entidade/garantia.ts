import { AduboGarantia } from './adubo-garantia';
import { EntidadeId } from '../entidade-id';

export class Garantia implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public descricao: string;
    public aduboGarantiaList: AduboGarantia[];

}
