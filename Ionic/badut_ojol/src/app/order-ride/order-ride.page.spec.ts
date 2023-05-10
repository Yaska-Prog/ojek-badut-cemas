import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderRidePage } from './order-ride.page';

describe('OrderRidePage', () => {
  let component: OrderRidePage;
  let fixture: ComponentFixture<OrderRidePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
