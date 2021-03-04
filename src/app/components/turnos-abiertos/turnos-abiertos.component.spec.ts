import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosAbiertosComponent } from './turnos-abiertos.component';

describe('TurnosAbiertosComponent', () => {
  let component: TurnosAbiertosComponent;
  let fixture: ComponentFixture<TurnosAbiertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnosAbiertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosAbiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
