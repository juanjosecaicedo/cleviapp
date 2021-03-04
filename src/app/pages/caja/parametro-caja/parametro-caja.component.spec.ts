import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroCajaComponent } from './parametro-caja.component';

describe('ParametroCajaComponent', () => {
  let component: ParametroCajaComponent;
  let fixture: ComponentFixture<ParametroCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroCajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
