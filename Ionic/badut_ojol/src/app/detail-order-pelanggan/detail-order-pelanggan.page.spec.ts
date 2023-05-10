import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailOrderPelangganPage } from './detail-order-pelanggan.page';

describe('DetailOrderPelangganPage', () => {
  let component: DetailOrderPelangganPage;
  let fixture: ComponentFixture<DetailOrderPelangganPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailOrderPelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
