import { EntidadeId } from '../entidade-id';

export class Nutriente implements EntidadeId {

    public id: number;
    public nome: string;
    public codigo: string;
    public sigla: string;

}
