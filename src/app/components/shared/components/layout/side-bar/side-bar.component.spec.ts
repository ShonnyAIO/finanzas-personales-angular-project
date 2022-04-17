import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarComponent],
      imports: [
        CommonModule,
        RouterModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente sidebar', () => {
    expect(component).toBeTruthy();
  });

  it('Debe existir los assets de Komerzio', () => {
    expect(component.assets.assetLogo).toBe('https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fkomerzio-logo.png?alt=media&token=068dbba6-5a25-49ac-8180-1b0224b54f75');
    expect(component.assets.assetIsoLogo).toBe('https://firebasestorage.googleapis.com/v0/b/kenzi-dev-version.appspot.com/o/assets%2Fimages%2Fiso_logo.png?alt=media&token=df2b3ded-5217-436d-9342-2373952bc347');
  });

  it('Debe existir la opcion de Supervision', () => {
    expect(component.testMenu[0].menu).toBe('Supervisión');
    expect(component.testMenu[0].icono).toBe('visibility');
  });

  it('Debe existir la opcion de Equipo', () => {
    expect(component.testMenu[1].menu).toBe('Equipo');
    expect(component.testMenu[1].icono).toBe('groups');
  });

  it('Debe existir la opcion de Clientes', () => {
    expect(component.testMenu[2].menu).toBe('Clientes');
    expect(component.testMenu[2].icono).toBe('handshake');
  });

  it('Debe existir la opcion de Widgets', () => {
    expect(component.testMenu[3].menu).toBe('Widgets');
    expect(component.testMenu[3].icono).toBe('widgets');
  });

  it('Debe existir la opcion de Marketing', () => {
    expect(component.testMenu[4].menu).toBe('Marketing');
    expect(component.testMenu[4].icono).toBe('campaign');
  });

  it('Debe existir la opcion de Pagos', () => {
    expect(component.testMenu[5].menu).toBe('Pagos');
    expect(component.testMenu[5].icono).toBe('payment');
  });

  it('Debe existir la opcion de Configuracion', () => {
    expect(component.testMenu[6].menu).toBe('Configuración');
    expect(component.testMenu[6].icono).toBe('settings_suggest');
  });

});
