import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryDriverPage } from './history-driver.page';

describe('HistoryDriverPage', () => {
  let component: HistoryDriverPage;
  let fixture: ComponentFixture<HistoryDriverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoryDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
