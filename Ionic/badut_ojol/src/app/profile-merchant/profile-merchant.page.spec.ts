import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileMerchantPage } from './profile-merchant.page';

describe('ProfileMerchantPage', () => {
  let component: ProfileMerchantPage;
  let fixture: ComponentFixture<ProfileMerchantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileMerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
