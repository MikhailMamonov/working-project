import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMeetingInfoComponent } from './next-meeting-info.component';

describe('NextMeetingInfoComponent', () => {
  let component: NextMeetingInfoComponent;
  let fixture: ComponentFixture<NextMeetingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextMeetingInfoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMeetingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
