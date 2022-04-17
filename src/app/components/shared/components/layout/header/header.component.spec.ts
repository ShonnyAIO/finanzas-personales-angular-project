import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        SharedModule,
        MaterialModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente header independiente del usuario', () => {
    expect(component).toBeTruthy();
  });

  it('Debe declarar los assets del Komerzio', () => {
    expect(component.assets.assetIsoLogo).toBe('https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fiso_logo.png?alt=media&token=df2b3ded-5217-436d-9342-2373952bc347');
    expect(component.assets.assetLogo).toBe('https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fkomerzio-logo.png?alt=media&token=068dbba6-5a25-49ac-8180-1b0224b54f75');
  });

  it('El autenticador demo debe estar en true', () => {
    expect(component.activateDemoAuth).toBeTrue();
  });

  it('La informacion del demo debe tener algo', () => {
    expect(component.demoUserInfo.logo.length).toBeGreaterThan(0);
    expect(component.demoUserInfo.rol.length).toBeGreaterThan(0);
    expect(component.demoUserInfo.nombre.length).toBeGreaterThan(0);
  });


});
