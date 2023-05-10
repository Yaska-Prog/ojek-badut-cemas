import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryPelangganPage } from './history-pelanggan.page';

describe('HistoryPelangganPage', () => {
  let component: HistoryPelangganPage;
  let fixture: ComponentFixture<HistoryPelangganPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoryPelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
