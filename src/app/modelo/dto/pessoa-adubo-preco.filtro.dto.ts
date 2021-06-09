import { FiltroIdDTO } from './filtro-id.dto';
import { AduboTipo } from '../entidade/adubo-tipo';

export class PessoaAduboPrecoFiltroDTO extends FiltroIdDTO {

    aduboTipo: AduboTipo;
    conteudo: string;
    
}
