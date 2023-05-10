import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileDriverPage } from './profile-driver.page';

describe('ProfileDriverPage', () => {
  let component: ProfileDriverPage;
  let fixture: ComponentFixture<ProfileDriverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
