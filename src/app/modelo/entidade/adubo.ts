import { AduboGarantia } from './adubo-garantia';
import { AduboTipo } from './adubo-tipo';
import { EntidadeId } from '../entidade-id';

export class Adubo implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public descricao: string;
    public aduboTipo: AduboTipo;
    public aduboGarantiaList: AduboGarantia[];

}
