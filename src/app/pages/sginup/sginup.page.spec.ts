import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SginupPage } from './sginup.page';

describe('SginupPage', () => {
  let component: SginupPage;
  let fixture: ComponentFixture<SginupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SginupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
