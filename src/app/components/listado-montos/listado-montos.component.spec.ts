import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMontosComponent } from './listado-montos.component';

describe('ListadoMontosComponent', () => {
  let component: ListadoMontosComponent;
  let fixture: ComponentFixture<ListadoMontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMontosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
