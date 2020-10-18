import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaciontargetaComponent } from './publicaciontargeta.component';

describe('PublicaciontargetaComponent', () => {
  let component: PublicaciontargetaComponent;
  let fixture: ComponentFixture<PublicaciontargetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicaciontargetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicaciontargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
