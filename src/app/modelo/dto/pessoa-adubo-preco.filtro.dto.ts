import { FiltroIdDTO } from './filtro-id.dto';
import { AduboTipo } from '../entidade/adubo-tipo';
import { Pessoa } from '../entidade/pessoa';

export class PessoaAduboPrecoFiltroDTO extends FiltroIdDTO {

    pessoa: Pessoa;
    aduboTipo: AduboTipo;
    conteudo: string;

}
