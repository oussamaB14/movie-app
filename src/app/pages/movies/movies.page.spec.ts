import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { MoviesPage } from './movies.page';

describe('Tab1Page', () => {
  let component: MoviesPage;
  let fixture: ComponentFixture<MoviesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
