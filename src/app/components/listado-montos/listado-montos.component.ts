import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listado-montos',
  templateUrl: './listado-montos.component.html',
  styleUrls: ['./listado-montos.component.scss']
})
export class ListadoMontosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { listadoCuentas: any, listadoMontos: any },
    private dialogRef: MatDialogRef<ListadoMontosComponent>) { }

  displayedColumns = ['tipo_cuenta', 'monto', 'moneda', 'otra_moneda', 'otro_monto'];

  ngOnInit(): void {
  }

  closedDialog() {
    this.dialogRef.close();
  }

}
