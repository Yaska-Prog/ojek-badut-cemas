import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePelangganPage } from './profile-pelanggan.page';

describe('ProfilePelangganPage', () => {
  let component: ProfilePelangganPage;
  let fixture: ComponentFixture<ProfilePelangganPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilePelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
