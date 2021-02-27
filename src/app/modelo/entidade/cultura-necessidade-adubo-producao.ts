import { EntidadeId } from '../entidade-id';
import { CulturaIdadePlantio } from './cultura-idade-plantio';
import { ClassificacaoNecessidadeAdubo } from '../dominio/classificacao-necessidade-adubo';
import { IdadeUnidade } from '../dominio/idade-unidade';

export class CulturaNecessidadeAduboProducao implements EntidadeId {

    public fosforo: number;
    public maximo: number;
    public minimo: number;
    public nitrogenio: number;
    public potassio: number;
    public classificacao: string | ClassificacaoNecessidadeAdubo;
    public idadeUnidade: string | IdadeUnidade;
    public id: number;
    public idadeReferenciaMax: number;
    public idadeReferenciaMin: number;

}
