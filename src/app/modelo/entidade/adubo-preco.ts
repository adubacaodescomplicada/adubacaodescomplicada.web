import { EntidadeId } from '../entidade-id';

import { Adubo } from './adubo';
import { UnidadeMedida } from './unidade-medida';

export class AduboPreco implements EntidadeId {

    public id: number;
    public adubo: Adubo;
    public unidadeMedida: UnidadeMedida;
    public valor: number;
    public data: string;

}
