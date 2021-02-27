import { ClassificacaoNecessidadeAdubo } from '../dominio/classificacao-necessidade-adubo';
import { EntidadeId } from '../entidade-id';
import { CulturaIdadePlantio } from './cultura-idade-plantio';

export class CulturaNecessidadeAduboFormacao implements EntidadeId {

    public id: number;
    public culturaIdadePlantio: CulturaIdadePlantio;
    public nitrogenio: number;
    public classificacao: string | ClassificacaoNecessidadeAdubo;
    public fosforo: number;
    public potassio: number;

}
