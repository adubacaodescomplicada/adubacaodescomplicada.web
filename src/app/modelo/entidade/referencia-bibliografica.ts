import { EntidadeId } from '../entidade-id';
import { ReferenciaBibliograficaAnaliseSoloParametro } from './referencia-bibliografica-analise-solo-parametro';

export class ReferenciaBibliografica implements EntidadeId {

    public id: number;
    public nome: string;
    public referenciaBibliograficaAnaliseSoloParametroList: ReferenciaBibliograficaAnaliseSoloParametro[];

}
