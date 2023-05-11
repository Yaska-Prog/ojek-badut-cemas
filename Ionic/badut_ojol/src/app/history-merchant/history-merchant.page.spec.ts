import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryMerchantPage } from './history-merchant.page';

describe('HistoryMerchantPage', () => {
  let component: HistoryMerchantPage;
  let fixture: ComponentFixture<HistoryMerchantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoryMerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
