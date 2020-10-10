import { EntidadeId } from '../entidade-id';

export class FonteMateriaOrganica implements EntidadeId {

    public id: number;
    public codigo: string;
    public nome: string;
    public quantidadeQuiloCova: number;

}
