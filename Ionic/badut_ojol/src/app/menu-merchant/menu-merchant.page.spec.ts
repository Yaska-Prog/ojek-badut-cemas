import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuMerchantPage } from './menu-merchant.page';

describe('MenuMerchantPage', () => {
  let component: MenuMerchantPage;
  let fixture: ComponentFixture<MenuMerchantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuMerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
