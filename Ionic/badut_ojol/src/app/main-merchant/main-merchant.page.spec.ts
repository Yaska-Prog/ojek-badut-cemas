import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMerchantPage } from './main-merchant.page';

describe('MainMerchantPage', () => {
  let component: MainMerchantPage;
  let fixture: ComponentFixture<MainMerchantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainMerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
