import { EntidadeId } from '../entidade-id';
import { Pessoa } from './pessoa'
import { Adubo } from './adubo';
import { UnidadeMedida } from './unidade-medida';

export class PessoaAduboPreco implements EntidadeId {

    public id: number;
    public pessoa: Pessoa;
    public adubo: Adubo;
    public unidadeMedida: UnidadeMedida;
    public data: string;
    public valor: number;

}