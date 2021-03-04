import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirosDepositoEfectivoComponent } from './retiros-deposito-efectivo.component';

describe('RetirosDepositoEfectivoComponent', () => {
  let component: RetirosDepositoEfectivoComponent;
  let fixture: ComponentFixture<RetirosDepositoEfectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirosDepositoEfectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirosDepositoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
