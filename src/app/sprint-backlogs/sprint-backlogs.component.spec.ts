import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintBacklogsComponent } from './sprint-backlogs.component';

describe('SprintBacklogsComponent', () => {
  let component: SprintBacklogsComponent;
  let fixture: ComponentFixture<SprintBacklogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintBacklogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintBacklogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
