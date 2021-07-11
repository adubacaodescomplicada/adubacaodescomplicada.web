import { Adubo } from './adubo';
import { CulturaFormaParcelamento } from './cultura-forma-parcelamento';
import { ReceitaFormaParcelamento } from './receita-forma-parcelamento';

export class ReceitaModoAplicacao {

    public quantidadePorMes: number;
    public totalMeses: number;
    public totalSafra: number;

    public formaParcelamento: ReceitaFormaParcelamento[];

}
