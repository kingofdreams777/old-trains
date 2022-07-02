import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbindexComponent } from './bulbindex.component';

describe('BulbindexComponent', () => {
  let component: BulbindexComponent;
  let fixture: ComponentFixture<BulbindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulbindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
