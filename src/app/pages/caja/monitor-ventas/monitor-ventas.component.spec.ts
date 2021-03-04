import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorVentasComponent } from './monitor-ventas.component';

describe('MonitorVentasComponent', () => {
  let component: MonitorVentasComponent;
  let fixture: ComponentFixture<MonitorVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
