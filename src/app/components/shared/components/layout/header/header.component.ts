import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { GlobalService } from "../../../../../services/global.service";
import { Router } from '@angular/router';

interface Assets {
  assetLogo: string,
  assetIsoLogo: string
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() imagenLogo: string = '';

  assets: Assets = {
    assetLogo: 'https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fkomerzio-logo.png?alt=media&token=068dbba6-5a25-49ac-8180-1b0224b54f75',
    assetIsoLogo: 'https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fiso_logo.png?alt=media&token=df2b3ded-5217-436d-9342-2373952bc347'
  }

  activateDemoAuth: Boolean = true; //VARIABLE TEMPORAL PARA MAQUETADO, EMULA LA AUTENTIFICACION DE UN USUARIO
  demoUserInfo = { //REEMPLAZAR POR INFORMACIÓN DEL API
    nombre: 'Calculadora de Divisas',
    rol: 'Usuario',
    logo: './../../../../assets/icons/icon-512x512.png'
  }
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log('%cNOS ENCANTA TU CURIOSIDAD, PERO NO DEBERIAS ESTAR AQUI!', 'color: #FFD500; font-size: 24px;');
  }


  openDialog() {
    const dialogRef = this.dialog.open(SideBarComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
