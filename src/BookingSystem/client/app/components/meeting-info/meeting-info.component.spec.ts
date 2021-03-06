import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInfoComponent } from './meeting-info.component';

describe('MeetingInfoComponent', () => {
  let component: MeetingInfoComponent;
  let fixture: ComponentFixture<MeetingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingInfoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
