import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicaltipsComponent } from './technicaltips.component';

describe('TechnicaltipsComponent', () => {
  let component: TechnicaltipsComponent;
  let fixture: ComponentFixture<TechnicaltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicaltipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicaltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
