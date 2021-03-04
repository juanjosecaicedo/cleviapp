import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasPorCobrasComponent } from './cuentas-por-cobras.component';

describe('CuentasPorCobrasComponent', () => {
  let component: CuentasPorCobrasComponent;
  let fixture: ComponentFixture<CuentasPorCobrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasPorCobrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasPorCobrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
