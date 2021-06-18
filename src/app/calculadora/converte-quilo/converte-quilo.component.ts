import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnexarTipo } from 'src/app/comum/servico/anexar/anexar-tipo';
import { AduboPreco } from 'src/app/modelo/entidade/adubo-preco';

@Component({
  selector: 'app-converte-quilo',
  templateUrl: './converte-quilo.component.html',
  styleUrls: ['./converte-quilo.component.scss']
})
export class ConverteQuiloComponent implements OnInit {

  private registro: AduboPreco;

  campo = {
    unidade: 1,
    valor: 0,
    valorConvertido: 0
  };

  constructor(
    public dialogRef: MatDialogRef<ConverteQuiloComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      valor: AduboPreco
    }
  ) {
    this.registro = this.data.valor;
    console.log('this.valor', this.registro);
  }

  ngOnInit(): void {
  }

  public confirmar(event) {
    let result = null;

    this.registro.valor = this.campo.valorConvertido;

    if (this.registro) {
      result = { 'valor': this.registro };
    }
    this.dialogRef.close(result);
  }

  public cancelar(event) {
    let result = null;
    this.dialogRef.close(result);
  }

}
