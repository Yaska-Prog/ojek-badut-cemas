import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPelangganPage } from './main-pelanggan.page';

describe('MainPelangganPage', () => {
  let component: MainPelangganPage;
  let fixture: ComponentFixture<MainPelangganPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainPelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
