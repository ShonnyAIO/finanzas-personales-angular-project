import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../../../../../services/global.service";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


interface Assets {
  assetLogo: string,
  assetIsoLogo: string
}

interface Menu {
  menu: string,
  icono: string,
  enlace: string
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  userOnline: any;

  assets: Assets = {
    assetLogo: 'https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fkomerzio-logo.png?alt=media&token=068dbba6-5a25-49ac-8180-1b0224b54f75',
    assetIsoLogo: './../../../../assets/icons/icon-512x512.png'
  }

  testMenu: Array<Menu> = [
    {
      menu: 'Curriculum',
      icono: 'description',
      enlace: 'https://shonnyaio.github.io/assets/pdf/CV_Jonathan_Torres_English.pdf'
    },
    {
      menu: 'Web Site',
      icono: 'language',
      enlace: 'https://shonnyaio.github.io/'
    },
  ];

  constructor(
    private global: GlobalService,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closedDialog() {
    this.dialog.closeAll();
  }

}
