import { EntidadeId } from '../entidade-id';
import { ReferenciaBibliografica } from './referencia-bibliografica';

export class ReferenciaBibliograficaCultura implements EntidadeId {

    public id: number;
    public nome: string;
    public metaSaturacaoBase: number;
    public referenciaBibliografica: ReferenciaBibliografica;

}
