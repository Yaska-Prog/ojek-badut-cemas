import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainDriverPage } from './main-driver.page';

describe('MainDriverPage', () => {
  let component: MainDriverPage;
  let fixture: ComponentFixture<MainDriverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
