import { EntidadeId } from '../entidade-id';

import { Adubo } from './adubo';
import { Garantia } from './garantia';

export class AduboGarantia implements EntidadeId {

    public id: number;
    public adubo: Adubo;
    public garantia: Garantia;
    public valor: number;

}
