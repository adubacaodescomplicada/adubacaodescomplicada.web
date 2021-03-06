import { AduboPreco } from './adubo-preco';
import { AduboGarantia } from './adubo-garantia';
import { AduboTipo } from './adubo-tipo';
import { EntidadeId } from '../entidade-id';

export class Adubo implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public descricao: string;
    public aduboTipo: AduboTipo;
    public quantidadeQuiloCova: number;
    public paraCobertura: string;
	public paraFertirrigacao: string;
    
    public aduboGarantiaList: AduboGarantia[];
    public aduboPrecoList: AduboPreco[];

}
