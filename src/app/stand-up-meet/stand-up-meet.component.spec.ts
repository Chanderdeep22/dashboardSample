import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandUpMeetComponent } from './stand-up-meet.component';

describe('StandUpMeetComponent', () => {
  let component: StandUpMeetComponent;
  let fixture: ComponentFixture<StandUpMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandUpMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandUpMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
