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

  ngOnInit(): void {
  }

  closedDialog() {
    this.dialogRef.close({ clear: false });
  }

  resetAccounts() {
    this.global.logout();
    this.dialogRef.close({ clear: true });
  }

}
