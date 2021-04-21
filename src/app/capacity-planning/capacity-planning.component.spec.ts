import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityPlanningComponent } from './capacity-planning.component';

describe('CapacityPlanningComponent', () => {
  let component: CapacityPlanningComponent;
  let fixture: ComponentFixture<CapacityPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
