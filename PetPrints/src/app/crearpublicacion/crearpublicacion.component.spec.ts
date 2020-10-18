import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpublicacionComponent } from './crearpublicacion.component';

describe('CrearpublicacionComponent', () => {
  let component: CrearpublicacionComponent;
  let fixture: ComponentFixture<CrearpublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
