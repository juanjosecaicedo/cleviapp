import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasCuentasComponent } from './consultas-cuentas.component';

describe('ConsultasCuentasComponent', () => {
  let component: ConsultasCuentasComponent;
  let fixture: ComponentFixture<ConsultasCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
