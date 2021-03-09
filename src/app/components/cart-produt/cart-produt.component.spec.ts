import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProdutComponent } from './cart-produt.component';

describe('CartProdutComponent', () => {
  let component: CartProdutComponent;
  let fixture: ComponentFixture<CartProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProdutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
