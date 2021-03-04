import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadProductosComponent } from './disponibilidad-productos.component';

describe('DisponibilidadProductosComponent', () => {
  let component: DisponibilidadProductosComponent;
  let fixture: ComponentFixture<DisponibilidadProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
