import { Component, OnInit } from '@angular/core';

interface Assets {
  assetLogo: string,
  assetIsoLogo: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  assets: Assets = {
    assetLogo: 'https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fkomerzio-logo.png?alt=media&token=068dbba6-5a25-49ac-8180-1b0224b54f75',
    assetIsoLogo: 'https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fiso_logo.png?alt=media&token=df2b3ded-5217-436d-9342-2373952bc347'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
