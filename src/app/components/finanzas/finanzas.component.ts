import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

/* Servicio de Finanzas */
import { FinanzasService } from 'src/app/services/finanzas.service';
import { ListadoMontosComponent } from '../listado-montos/listado-montos.component';

/* Modelos */
import { Moneda } from '../shared/models/moneda.model';
import { CuentasPersonales } from '../shared/models/cuentas_personales.model';
import { Finanzas } from '../shared/models/finanzas.model';


@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.scss']
})
export class FinanzasComponent implements OnInit {

  constructor(private finanzasApi: FinanzasService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.cuentasForms();
  }

  ngOnInit(): void {
    Promise.all([this.getDollarBCV(), this.getDollarParalelo(), this.getDolarAmbulante()]);
  }

  /* Objects Interfaces */
  monedas: Moneda[] = [];
  cuentasPersonales: CuentasPersonales[] = [];

  /* Monto total */
  montoDisponible: Finanzas[] = [
    {
      montoBS: 0,
      montoDollar: 0,
      referencia: 'B.C.V'
    },
    {
      montoBS: 0,
      montoDollar: 0,
      referencia: 'Enparalelo'
    }];

  montoBCV: number = 0;
  montoEN: number = 0;

  /* Forms */
  formCuentas: FormGroup = new FormGroup({})

  private cuentasForms() {
    this.formCuentas = this.formBuilder.group({
      tipo_cuenta: ['', [Validators.required]],
      monto: [0, [Validators.required]],
      moneda: ['', [Validators.required]]
    });
  }

  registerAccount() {
    if (this.formCuentas.valid) {
      if (this.formCuentas.value.moneda == 'REF') {
        /* Esto es para el BCV */
        let precioBCV = Number((this.formCuentas.value.monto * this.montoBCV).toFixed(2));
        this.montoDisponible[0].montoDollar += this.formCuentas.value.monto;
        this.montoDisponible[0].montoBS += precioBCV;
        this.formCuentas.value.otra_moneda = 'BS.S';
        this.formCuentas.value.otro_monto = precioBCV;

        /* Esto es par el Enparalelo */
        let paralelo = Number((this.formCuentas.value.monto * this.montoEN).toFixed(2));
        this.montoDisponible[1].montoDollar += this.formCuentas.value.monto;
        this.montoDisponible[1].montoBS += paralelo;
        /* this.formCuentas.value.otra_moneda = 'BS.S';
        this.formCuentas.value.otro_monto = paralelo; */
      } else {
        /* Esto es para el BCV */
        let precioBCV = Number((this.formCuentas.value.monto / this.montoBCV).toFixed(2));
        this.montoDisponible[0].montoDollar += precioBCV;
        this.montoDisponible[0].montoBS += this.formCuentas.value.monto;
        this.formCuentas.value.otra_moneda = 'REF';
        this.formCuentas.value.otro_monto = precioBCV;

        /* Esto es par el Enparalelo */
        let paralelo = Number((this.formCuentas.value.monto / this.montoEN).toFixed(2));
        this.montoDisponible[1].montoDollar += paralelo;
        this.montoDisponible[1].montoBS += this.formCuentas.value.monto;
        /*
        this.formCuentas.value.otra_moneda = 'REF';
        this.formCuentas.value.otro_monto = paralelo; */
      }
      this.cuentasPersonales.push(this.formCuentas.value);
      this.formCuentas.reset();
    } else {
      console.warn('Debes ingresar una cuenta');
    }
  }

  getErrorMessage(field: string): any {
    let value = this.formCuentas.get(field);
    if (value?.hasError('required')) {
      return 'Debes ingresar un valor';
    }
    if (value?.touched) {
      return 'No has interactuado con este formulario';
    }
    if (value?.invalid) {
      return 'Este formato es invalido';
    }
  }

  listadoMontos() {
    const dialogRef = this.dialog.open(ListadoMontosComponent, {
      height: '100%',
      width: '100%',
      data: {
        listadoCuentas: this.cuentasPersonales,
        listadoMontos: this.montoDisponible
      },
      position: {
        top: '50px',
        left: '100px',
        right: '100px',
        bottom: '50px'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }


  async getDollarBCV() {
    this.finanzasApi.getDollarBCV().subscribe((response: any) => {
      let precio = Number(response.precio);
      this.montoBCV = Number(precio.toFixed(2));
      this.monedas.push({
        monto: this.montoBCV,
        tipo_moneda: 'dollar',
        fuente: 'bcv',
        titulo: 'Precio del Dolar de B.C.V'
      })
    });
  }

  async getDollarParalelo() {
    this.finanzasApi.getDollarParalelo().subscribe((response: any) => {
      this.montoEN = Number(response.precio);
      this.monedas.push({
        monto: response.precio,
        tipo_moneda: 'dollar',
        fuente: 'enparalelo',
        titulo: 'Precio del Dolar en paralelo'
      })
    });
  }

  async getDolarAmbulante() {
    this.monedas.push({
      monto: 5.0,
      tipo_moneda: 'dollar',
      fuente: 'vendedores-ambulantes',
      titulo: 'Precio del Dolar Otros'
    });
  }

}
