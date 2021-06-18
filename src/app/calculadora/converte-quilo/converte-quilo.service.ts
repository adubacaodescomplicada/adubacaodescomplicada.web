import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ConverteQuiloComponent } from './converte-quilo.component';

@Injectable({
  providedIn: 'root'
})
export class ConverteQuiloService {

  constructor(public dialog: MatDialog) {
  }

  public converte(valor) {
    return new Observable((observer) => {

      const dialogRef = this.dialog.open(ConverteQuiloComponent, {
        height: '400px',
        width: '600px',
        data: {
          valor,
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          observer.next(result);
        }
        observer.complete();
      });
    });
  }

}
