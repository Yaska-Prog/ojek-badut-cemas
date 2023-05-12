import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailOrderDriverPage } from './detail-order-driver.page';

describe('DetailOrderDriverPage', () => {
  let component: DetailOrderDriverPage;
  let fixture: ComponentFixture<DetailOrderDriverPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(DetailOrderDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
