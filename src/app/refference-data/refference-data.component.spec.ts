import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferenceDataComponent } from './refference-data.component';

describe('RefferenceDataComponent', () => {
  let component: RefferenceDataComponent;
  let fixture: ComponentFixture<RefferenceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferenceDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferenceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
