import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SgininPage } from './sginin.page';

describe('SgininPage', () => {
  let component: SgininPage;
  let fixture: ComponentFixture<SgininPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SgininPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
