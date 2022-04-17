import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanzasComponent } from './finanzas.component';
import { FinanzasRoutingModule } from './finanzas-routing.module';
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from 'src/app/material/material.module';
import { ListadoMontosComponent } from '../listado-montos/listado-montos.component';

@NgModule({
    declarations: [
        FinanzasComponent,
        ListadoMontosComponent
    ],
    imports: [
        CommonModule,
        FinanzasRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class FinanzasModule { }