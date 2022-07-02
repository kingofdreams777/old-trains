import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestinglinksComponent } from './interestinglinks.component';

describe('InterestinglinksComponent', () => {
  let component: InterestinglinksComponent;
  let fixture: ComponentFixture<InterestinglinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestinglinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestinglinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
