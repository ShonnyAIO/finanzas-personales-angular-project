import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-listado-montos',
  templateUrl: './listado-montos.component.html',
  styleUrls: ['./listado-montos.component.scss']
})
export class ListadoMontosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { listadoCuentas: any, listadoMontos: any },
    private dialogRef: MatDialogRef<ListadoMontosComponent>, private global: GlobalService) { }

  displayedColumns = ['tipo_cuenta', 'monto', 'otro_monto', 'motivo_cuenta'];

  ingreso = {
    monto: 0,
    moneda: '',
    otro_monto: 0,
    otra_moneda: ''
  };

  egreso = {
    monto: 0,
    moneda: '',
    otro_monto: 0,
    otra_moneda: ''
  };

  ngOnInit(): void {
    this.data.listadoCuentas.forEach((element: any) => {
      if (element.motivo_cuenta == 'egreso') {
        this.egreso.monto += element.monto;
        this.egreso.moneda = element.moneda;
        this.egreso.otro_monto += element.otro_monto;
        this.egreso.otra_moneda = element.otra_moneda;
      }

      if (element.motivo_cuenta == 'ingreso') {
        this.ingreso.monto += element.monto;
        this.ingreso.moneda = element.moneda;
        this.ingreso.otro_monto += element.otro_monto;
        this.ingreso.otra_moneda = element.otra_moneda;
      }
    })
  }

  closedDialog() {
    this.dialogRef.close({ clear: false });
  }

  resetAccounts() {
    this.global.logout();
    this.dialogRef.close({ clear: true });
  }

}
