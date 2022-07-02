import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsandmaterialsComponent } from './toolsandmaterials.component';

describe('ToolsandmaterialsComponent', () => {
  let component: ToolsandmaterialsComponent;
  let fixture: ComponentFixture<ToolsandmaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsandmaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsandmaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
