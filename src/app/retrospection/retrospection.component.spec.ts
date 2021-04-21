import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrospectionComponent } from './retrospection.component';

describe('RetrospectionComponent', () => {
  let component: RetrospectionComponent;
  let fixture: ComponentFixture<RetrospectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrospectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrospectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
